import * as React from 'react';

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  hint?: string;
  error?: string;
  /** First, disabled option shown when nothing is chosen. */
  placeholder?: string;
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

/** Styled native select with custom chevron, matching Input. */
export function Select(props: SelectProps): React.ReactElement;
