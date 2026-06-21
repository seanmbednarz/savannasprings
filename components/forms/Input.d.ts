import * as React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — turns the field red and replaces the hint. */
  error?: string;
  iconLeft?: React.ReactNode;
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
}

/** Single-line text input with label, icon, hint and error states. */
export function Input(props: InputProps): React.ReactElement;
