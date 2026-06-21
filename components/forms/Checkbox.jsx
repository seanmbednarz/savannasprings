import React from 'react';

/**
 * Savanna Springs — Checkbox
 * Rounded checkbox with brand navy fill. Controlled or uncontrolled.
 */
export function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style = {},
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;

  const toggle = (e) => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };

  return (
    <label style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.55 : 1, ...style,
    }}>
      <span style={{ position: 'relative', display: 'inline-flex', width: 22, height: 22, flex: 'none' }}>
        <input type="checkbox" checked={on} onChange={toggle} disabled={disabled} {...rest}
          style={{ position: 'absolute', opacity: 0, width: '100%', height: '100%', margin: 0, cursor: 'inherit' }} />
        <span style={{
          width: 22, height: 22, borderRadius: 'var(--radius-sm)',
          border: `2px solid ${on ? 'var(--brand)' : 'var(--border-strong)'}`,
          background: on ? 'var(--brand)' : 'var(--surface)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
        }}>
          {on && (
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          )}
        </span>
      </span>
      {label && <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--navy-900)' }}>{label}</span>}
    </label>
  );
}
