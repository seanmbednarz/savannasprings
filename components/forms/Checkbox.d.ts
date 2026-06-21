import * as React from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
}

/** Brand checkbox with navy fill and check glyph. Controlled or uncontrolled. */
export function Checkbox(props: CheckboxProps): React.ReactElement;
