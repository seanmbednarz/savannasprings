import React from 'react';

/**
 * Savanna Springs — IconButton
 * Square/circular button for a single icon (close, nav, social).
 */
export function IconButton({
  children,
  variant = 'soft',
  size = 'md',
  round = true,
  disabled = false,
  label,
  style = {},
  ...rest
}) {
  const sizes = { sm: 34, md: 42, lg: 50 };
  const dim = sizes[size] || sizes.md;

  const palettes = {
    solid: { bg: 'var(--brand)', bgHover: 'var(--brand-hover)', fg: 'var(--text-inverse)' },
    soft:  { bg: 'var(--navy-50)', bgHover: 'var(--navy-100)', fg: 'var(--navy-700)' },
    accent:{ bg: 'var(--accent)', bgHover: 'var(--accent-hover)', fg: 'var(--navy-900)' },
    ghost: { bg: 'transparent', bgHover: 'var(--navy-50)', fg: 'var(--navy-700)' },
  };
  const p = palettes[variant] || palettes.soft;
  const [hover, setHover] = React.useState(false);

  return (
    <button
      {...rest}
      aria-label={label}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: dim, height: dim,
        color: disabled ? 'var(--neutral-400)' : p.fg,
        background: disabled ? 'var(--neutral-100)' : hover ? p.bgHover : p.bg,
        border: 'none',
        borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background var(--dur-fast) var(--ease-out)',
        outline: 'none',
        ...style,
      }}
    >
      {children}
    </button>
  );
}
