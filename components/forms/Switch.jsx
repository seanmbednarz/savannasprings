import React from 'react';

/**
 * Savanna Springs — Switch
 * Pill toggle. Spring-blue when on.
 */
export function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  size = 'md',
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const dims = size === 'sm' ? { w: 38, h: 22, k: 16 } : { w: 48, h: 28, k: 22 };

  const toggle = (e) => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };

  return (
    <label style={{
      display: 'inline-flex', alignItems: 'center', gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.55 : 1, ...style,
    }}>
      <span style={{ position: 'relative', display: 'inline-flex', width: dims.w, height: dims.h, flex: 'none' }}>
        <input type="checkbox" checked={on} onChange={toggle} disabled={disabled} {...rest}
          style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', margin: 0, cursor: 'inherit' }} />
        <span style={{
          width: dims.w, height: dims.h, borderRadius: 'var(--radius-pill)',
          background: on ? 'var(--water)' : 'var(--neutral-300)',
          transition: 'background var(--dur-base) var(--ease-out)',
        }} />
        <span style={{
          position: 'absolute', top: (dims.h - dims.k) / 2, left: on ? dims.w - dims.k - (dims.h - dims.k) / 2 : (dims.h - dims.k) / 2,
          width: dims.k, height: dims.k, borderRadius: '50%', background: '#fff',
          boxShadow: 'var(--shadow-sm)', transition: 'left var(--dur-base) var(--ease-spring)',
        }} />
      </span>
      {label && <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--navy-900)' }}>{label}</span>}
    </label>
  );
}
