import * as React from 'react';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  /** @default 'md' */
  size?: 'sm' | 'md';
}

/** Pill toggle switch, spring-blue when on. Controlled or uncontrolled. */
export function Switch(props: SwitchProps): React.ReactElement;
