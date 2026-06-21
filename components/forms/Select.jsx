import React from 'react';

/**
 * Savanna Springs — Select
 * Native select styled to match Input, with a custom chevron.
 */
export function Select({
  label,
  hint,
  error,
  size = 'md',
  id,
  children,
  placeholder,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const sizes = { sm: { h: 40, fs: 14, px: 12 }, md: { h: 48, fs: 15, px: 14 }, lg: { h: 56, fs: 16, px: 16 } };
  const s = sizes[size] || sizes.md;
  const reactId = React.useId();
  const fieldId = id || reactId;
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--ring)' : 'var(--border-strong)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--navy-800)' }}>{label}</label>
      )}
      <div style={{
        position: 'relative', height: s.h,
        border: `1.5px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
        background: 'var(--surface)',
        boxShadow: focus ? `0 0 0 var(--ring-width) ${error ? 'var(--red-100)' : 'var(--spring-100)'}` : 'none',
        transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      }}>
        <select
          id={fieldId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...rest}
          style={{
            width: '100%', height: '100%', border: 'none', outline: 'none', background: 'transparent',
            padding: `0 ${s.px + 26}px 0 ${s.px}px`,
            fontFamily: 'var(--font-body)', fontSize: s.fs, color: 'var(--navy-900)',
            appearance: 'none', WebkitAppearance: 'none', cursor: 'pointer',
          }}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {children}
        </select>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--neutral-500)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          style={{ position: 'absolute', right: s.px, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
      {(hint || error) && (
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: error ? 'var(--danger)' : 'var(--text-muted)' }}>{error || hint}</span>
      )}
    </div>
  );
}
