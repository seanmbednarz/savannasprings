import React from 'react';

/**
 * Savanna Springs — Badge
 * Small status / label pill. Soft tinted by default.
 */
export function Badge({
  children,
  color = 'navy',
  variant = 'soft',
  size = 'md',
  iconLeft = null,
  style = {},
  ...rest
}) {
  const palette = {
    navy:    { soft: ['var(--navy-50)', 'var(--navy-700)'], solid: ['var(--navy-700)', '#fff'] },
    water:   { soft: ['var(--spring-50)', 'var(--spring-700)'], solid: ['var(--spring-500)', '#fff'] },
    sun:     { soft: ['var(--sun-100)', 'var(--sun-800)'], solid: ['var(--sun-400)', 'var(--navy-900)'] },
    orange:  { soft: ['#ffe7d1', 'var(--orange-700)'], solid: ['var(--orange-500)', '#fff'] },
    success: { soft: ['var(--green-100)', 'var(--green-700)'], solid: ['var(--success)', '#fff'] },
    danger:  { soft: ['var(--red-100)', 'var(--red-700)'], solid: ['var(--danger)', '#fff'] },
    neutral: { soft: ['var(--neutral-100)', 'var(--neutral-700)'], solid: ['var(--neutral-600)', '#fff'] },
  };
  const [bg, fg] = (palette[color] || palette.navy)[variant === 'solid' ? 'solid' : 'soft'];
  const sizes = { sm: { fs: 11, pad: '3px 9px', gap: 4 }, md: { fs: 12.5, pad: '5px 12px', gap: 5 } };
  const s = sizes[size] || sizes.md;

  return (
    <span {...rest} style={{
      display: 'inline-flex', alignItems: 'center', gap: s.gap,
      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: s.fs, lineHeight: 1,
      letterSpacing: '0.01em',
      color: fg, background: bg, padding: s.pad, borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap', ...style,
    }}>
      {iconLeft && <span style={{ display: 'inline-flex', width: s.fs, height: s.fs }}>{iconLeft}</span>}
      {children}
    </span>
  );
}
