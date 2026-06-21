import React from 'react';

/**
 * Savanna Springs — Avatar
 * Circular image or initials. Used for testimonials / staff.
 */
export function Avatar({
  src,
  name = '',
  size = 'md',
  color = 'navy',
  style = {},
  ...rest
}) {
  const sizes = { sm: 32, md: 44, lg: 60, xl: 84 };
  const dim = sizes[size] || sizes.md;
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map((p) => p[0]).join('').toUpperCase();
  const colors = {
    navy:   ['var(--navy-100)', 'var(--navy-700)'],
    water:  ['var(--spring-100)', 'var(--spring-700)'],
    sun:    ['var(--sun-200)', 'var(--sun-800)'],
    orange: ['#ffe7d1', 'var(--orange-700)'],
  };
  const [bg, fg] = colors[color] || colors.navy;

  return (
    <span {...rest} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: dim, height: dim, borderRadius: '50%', overflow: 'hidden',
      background: bg, color: fg,
      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: dim * 0.38,
      flex: 'none', userSelect: 'none', ...style,
    }}>
      {src ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
    </span>
  );
}
