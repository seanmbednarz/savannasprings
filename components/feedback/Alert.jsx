import React from 'react';

/**
 * Savanna Springs — Alert
 * Inline message banner with semantic tone.
 */
export function Alert({
  children,
  title,
  tone = 'info',
  icon = null,
  onClose,
  style = {},
  ...rest
}) {
  const tones = {
    info:    { bg: 'var(--spring-50)', bd: 'var(--spring-200)', fg: 'var(--spring-700)', tx: 'var(--spring-900)' },
    success: { bg: 'var(--green-100)', bd: '#a7dcc1', fg: 'var(--green-700)', tx: 'var(--green-700)' },
    warning: { bg: 'var(--amber-100)', bd: '#f1d488', fg: 'var(--amber-700)', tx: 'var(--amber-700)' },
    danger:  { bg: 'var(--red-100)', bd: '#f1b3ad', fg: 'var(--red-700)', tx: 'var(--red-700)' },
    brand:   { bg: 'var(--navy-50)', bd: 'var(--navy-200)', fg: 'var(--navy-700)', tx: 'var(--navy-800)' },
  };
  const t = tones[tone] || tones.info;

  return (
    <div {...rest} role="status" style={{
      display: 'flex', alignItems: 'flex-start', gap: 12,
      background: t.bg, border: `1.5px solid ${t.bd}`, borderRadius: 'var(--radius-lg)',
      padding: '14px 16px', ...style,
    }}>
      {icon && <span style={{ display: 'inline-flex', width: 20, height: 20, color: t.fg, flex: 'none', marginTop: 1 }}>{icon}</span>}
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: t.tx, marginBottom: 2 }}>{title}</div>}
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.5, color: t.tx, opacity: 0.92 }}>{children}</div>
      </div>
      {onClose && (
        <button onClick={onClose} aria-label="Dismiss" style={{
          border: 'none', background: 'transparent', cursor: 'pointer', color: t.fg, padding: 2, display: 'inline-flex', flex: 'none',
        }}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
      )}
    </div>
  );
}
