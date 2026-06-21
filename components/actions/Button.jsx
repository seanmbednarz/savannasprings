import React from 'react';

/**
 * Savanna Springs — Button
 * Friendly, confident actions. Pill-shaped by default to match the
 * rounded brand. Primary = navy; accent = sun yellow (the headline CTA
 * across the brand's ads); water = spring blue; plus secondary, outline
 * and ghost.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  shape = 'pill',
  block = false,
  disabled = false,
  loading = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { fontSize: 14, padding: '8px 16px', gap: 7, minHeight: 36, iconBox: 16 },
    md: { fontSize: 15, padding: '12px 22px', gap: 9, minHeight: 44, iconBox: 18 },
    lg: { fontSize: 17, padding: '15px 30px', gap: 10, minHeight: 54, iconBox: 20 },
  };
  const s = sizes[size] || sizes.md;

  const palettes = {
    primary: { bg: 'var(--brand)', bgHover: 'var(--brand-hover)', bgActive: 'var(--brand-active)', fg: 'var(--text-inverse)', border: 'transparent', shadow: 'var(--shadow-sm)' },
    accent:  { bg: 'var(--accent)', bgHover: 'var(--accent-hover)', bgActive: 'var(--accent-active)', fg: 'var(--navy-900)', border: 'transparent', shadow: 'var(--shadow-accent)' },
    water:   { bg: 'var(--water)', bgHover: 'var(--water-hover)', bgActive: 'var(--spring-600)', fg: 'var(--navy-900)', border: 'transparent', shadow: 'var(--shadow-sm)' },
    secondary:{ bg: 'var(--navy-50)', bgHover: 'var(--navy-100)', bgActive: 'var(--navy-200)', fg: 'var(--navy-700)', border: 'transparent', shadow: 'none' },
    outline: { bg: 'transparent', bgHover: 'var(--navy-50)', bgActive: 'var(--navy-100)', fg: 'var(--navy-700)', border: 'var(--border-strong)', shadow: 'none' },
    ghost:   { bg: 'transparent', bgHover: 'var(--navy-50)', bgActive: 'var(--navy-100)', fg: 'var(--navy-700)', border: 'transparent', shadow: 'none' },
  };
  const p = palettes[variant] || palettes.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const radius = shape === 'pill' ? 'var(--radius-pill)' : 'var(--radius-md)';
  const bg = disabled ? 'var(--neutral-200)' : active ? p.bgActive : hover ? p.bgHover : p.bg;

  return (
    <button
      {...rest}
      disabled={disabled || loading}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: block ? 'flex' : 'inline-flex',
        width: block ? '100%' : 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: s.fontSize,
        lineHeight: 1,
        letterSpacing: '-0.01em',
        minHeight: s.minHeight,
        padding: s.padding,
        color: disabled ? 'var(--neutral-400)' : p.fg,
        background: bg,
        border: `1.5px solid ${disabled ? 'transparent' : p.border}`,
        borderRadius: radius,
        boxShadow: disabled || variant === 'ghost' || variant === 'outline' ? 'none' : p.shadow,
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        transform: active && !disabled ? 'translateY(1px)' : 'translateY(0)',
        transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        outline: 'none',
        ...style,
      }}
    >
      {loading && (
        <span style={{
          width: s.iconBox, height: s.iconBox, borderRadius: '50%',
          border: '2.5px solid currentColor', borderTopColor: 'transparent',
          display: 'inline-block', animation: 'ss-spin 0.7s linear infinite', opacity: 0.9,
        }} />
      )}
      {!loading && iconLeft && <span style={{ display: 'inline-flex', width: s.iconBox, height: s.iconBox }}>{iconLeft}</span>}
      {children}
      {!loading && iconRight && <span style={{ display: 'inline-flex', width: s.iconBox, height: s.iconBox }}>{iconRight}</span>}
      <style>{`@keyframes ss-spin { to { transform: rotate(360deg); } }`}</style>
    </button>
  );
}
