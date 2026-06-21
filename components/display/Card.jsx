import React from 'react';

/**
 * Savanna Springs — Card
 * Rounded surface container. Variants for elevation/emphasis.
 */
export function Card({
  children,
  variant = 'elevated',
  padding = 'md',
  hoverable = false,
  as = 'div',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const pads = { none: 0, sm: 'var(--space-4)', md: 'var(--space-5)', lg: 'var(--space-6)' };

  const variants = {
    elevated: { background: 'var(--surface-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)' },
    soft:     { background: 'var(--navy-50)', border: '1px solid transparent', boxShadow: 'none' },
    outline:  { background: 'var(--surface-card)', border: '1.5px solid var(--border-strong)', boxShadow: 'none' },
    water:    { background: 'var(--surface-water)', border: '1px solid var(--spring-100)', boxShadow: 'none' },
    brand:    { background: 'var(--navy-700)', border: '1px solid var(--navy-700)', boxShadow: 'var(--shadow-md)', color: '#fff' },
  };
  const v = variants[variant] || variants.elevated;
  const Comp = as;

  return (
    <Comp
      {...rest}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 'var(--radius-xl)',
        padding: pads[padding] ?? pads.md,
        overflow: 'hidden',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        transform: hoverable && hover ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hoverable && hover ? 'var(--shadow-lg)' : v.boxShadow,
        cursor: hoverable ? 'pointer' : 'default',
        ...v,
        ...style,
      }}
    >
      {children}
    </Comp>
  );
}
