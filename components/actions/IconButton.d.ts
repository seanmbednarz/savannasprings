import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** @default 'soft' */
  variant?: 'solid' | 'soft' | 'accent' | 'ghost';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Circular when true, rounded-square when false. @default true */
  round?: boolean;
  /** Accessible label (required — icon-only). */
  label: string;
  disabled?: boolean;
}

/** Single-icon button (close, nav arrows, social links). */
export function IconButton(props: IconButtonProps): React.ReactElement;
