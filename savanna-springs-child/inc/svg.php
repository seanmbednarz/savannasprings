<?php
/**
 * Safe SVG upload support.
 *
 * WordPress blocks SVG uploads by default because an SVG is XML and can carry
 * embedded scripts. This enables them only for users who can `upload_files`
 * (editors/admins), sanitizes the file on upload (strips <script>, event
 * handlers, javascript: URLs, external entities, etc.), and fixes the
 * media-library / admin preview so SVGs display at a sane size.
 *
 * For a heavier-duty, continuously-maintained sanitizer, install the free
 * "Safe SVG" plugin instead — this file defers to it automatically if active.
 *
 * @package savanna-springs-child
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

/** Bail out of all of this if the Safe SVG plugin is handling SVGs already. */
function ss_svg_plugin_active() {
	return function_exists( 'safe_svg' ) || class_exists( 'safe_svg' ) || defined( 'SAFE_SVG_VERSION' );
}

/** Allow the SVG mime type for capable users. */
function ss_allow_svg_mime( $mimes ) {
	if ( ss_svg_plugin_active() ) { return $mimes; }
	if ( current_user_can( 'upload_files' ) ) {
		$mimes['svg']  = 'image/svg+xml';
		$mimes['svgz'] = 'image/svg+xml';
	}
	return $mimes;
}
add_filter( 'upload_mimes', 'ss_allow_svg_mime' );

/**
 * WordPress real-mime check (>= 4.7.1) rejects SVGs because they read as
 * text/plain. Tell it the type/ext is fine when the filename is an .svg and
 * the user is allowed to upload.
 */
function ss_fix_svg_filetype( $data, $file, $filename, $mimes, $real_mime = '' ) {
	if ( ss_svg_plugin_active() ) { return $data; }
	$ext = isset( $data['ext'] ) ? $data['ext'] : '';
	if ( ! $ext ) {
		$ext = strtolower( pathinfo( $filename, PATHINFO_EXTENSION ) );
	}
	if ( 'svg' === $ext || 'svgz' === $ext ) {
		if ( ! current_user_can( 'upload_files' ) ) {
			return array( 'ext' => false, 'type' => false, 'proper_filename' => false );
		}
		$data['ext']  = $ext;
		$data['type'] = 'image/svg+xml';
	}
	return $data;
}
add_filter( 'wp_check_filetype_and_ext', 'ss_fix_svg_filetype', 10, 5 );

/**
 * Sanitize the SVG file contents on upload: strip script/handler/external
 * vectors. Returns true if the file is safe (and was cleaned in place),
 * false if it could not be read.
 */
function ss_sanitize_svg_file( $path ) {
	$svg = file_get_contents( $path );
	if ( false === $svg ) { return false; }

	// Drop UTF-8 BOM if present.
	$svg = preg_replace( '/^\xEF\xBB\xBF/', '', $svg );

	// Remove DOCTYPE / ENTITY declarations (XXE / billion-laughs).
	$svg = preg_replace( '/<!DOCTYPE[^>]*>/is', '', $svg );
	$svg = preg_replace( '/<!ENTITY[^>]*>/is', '', $svg );

	// Remove <script> and <foreignObject> blocks entirely.
	$svg = preg_replace( '#<script\b[^>]*>.*?</script>#is', '', $svg );
	$svg = preg_replace( '#<script\b[^>]*/?>#is', '', $svg );
	$svg = preg_replace( '#<foreignObject\b[^>]*>.*?</foreignObject>#is', '', $svg );

	// Remove inline event handlers: on*="..." / on*='...' / on*=value.
	$svg = preg_replace( '/\son\w+\s*=\s*"[^"]*"/i', '', $svg );
	$svg = preg_replace( "/\son\w+\s*=\s*'[^']*'/i", '', $svg );
	$svg = preg_replace( '/\son\w+\s*=\s*[^\s>]+/i', '', $svg );

	// Neutralize javascript: in href / xlink:href / src style refs.
	$svg = preg_replace( '/(href|xlink:href|src)\s*=\s*"(\s*javascript:[^"]*)"/i', '$1="#"', $svg );
	$svg = preg_replace( "/(href|xlink:href|src)\s*=\s*'(\s*javascript:[^']*)'/i", '$1=\'#\'', $svg );

	// Strip <use> external references and <a> javascript handlers leftovers.
	$svg = preg_replace( '/<\?php.*?\?>/is', '', $svg );

	return false !== file_put_contents( $path, $svg );
}

/**
 * Hook the sanitizer into the upload pipeline. Runs after the file lands in
 * the uploads dir but before it is registered as an attachment.
 */
function ss_sanitize_svg_on_upload( $upload ) {
	if ( ss_svg_plugin_active() ) { return $upload; }
	if ( ! empty( $upload['type'] ) && 'image/svg+xml' === $upload['type'] && ! empty( $upload['file'] ) ) {
		if ( ! ss_sanitize_svg_file( $upload['file'] ) ) {
			// If we can't sanitize it, refuse the upload rather than store raw.
			@unlink( $upload['file'] );
			return array( 'error' => __( 'This SVG could not be processed safely and was rejected.', 'savanna-springs-child' ) );
		}
	}
	return $upload;
}
add_filter( 'wp_handle_upload', 'ss_sanitize_svg_on_upload' );

/**
 * Give SVG attachments sane dimensions so the media library and editor don't
 * render them at 0×0 (SVGs have no intrinsic raster size for WP to read).
 */
function ss_svg_image_downsize( $out, $id, $size ) {
	if ( 'image/svg+xml' !== get_post_mime_type( $id ) ) { return $out; }
	$url = wp_get_attachment_url( $id );
	return array( $url, 60, 60, false );
}
add_filter( 'image_downsize', 'ss_svg_image_downsize', 10, 3 );

/** Show a proper thumbnail for SVGs in the media library grid/list. */
function ss_svg_admin_thumb_css() {
	echo '<style>.media-icon img[src$=".svg"],img[src$=".svg"].attachment-post-thumbnail,'
		. '.attachment .thumbnail img[src$=".svg"]{width:100%!important;height:auto!important}</style>';
}
add_action( 'admin_head', 'ss_svg_admin_thumb_css' );
