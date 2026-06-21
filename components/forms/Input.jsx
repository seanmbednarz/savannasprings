import React from 'react';

/**
 * Savanna Springs — Input
 * Text field with optional label, leading icon, hint and error.
 */
export function Input({
  label,
  hint,
  error,
  iconLeft = null,
  size = 'md',
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = {
    sm: { h: 40, fs: 14, px: 12 },
    md: { h: 48, fs: 15, px: 14 },
    lg: { h: 56, fs: 16, px: 16 },
  };
  const s = sizes[size] || sizes.md;
  const reactId = React.useId();
  const fieldId = id || reactId;

  const borderColor = error ? 'var(--danger)' : focus ? 'var(--ring)' : 'var(--border-strong)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{
          fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--navy-800)',
        }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        height: s.h, padding: `0 ${s.px}px`,
        background: 'var(--surface)',
        border: `1.5px solid ${borderColor}`,
        borderRadius: 'var(--radius-md)',
        boxShadow: focus ? `0 0 0 var(--ring-width) ${error ? 'var(--red-100)' : 'var(--spring-100)'}` : 'none',
        transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      }}>
        {iconLeft && <span style={{ display: 'inline-flex', width: 18, height: 18, color: 'var(--neutral-500)', flex: 'none' }}>{iconLeft}</span>}
        <input
          id={fieldId}
          onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
          onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
          {...rest}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-body)', fontSize: s.fs, color: 'var(--navy-900)', minWidth: 0,
          }}
        />
      </div>
      {(hint || error) && (
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: error ? 'var(--danger)' : 'var(--text-muted)' }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
