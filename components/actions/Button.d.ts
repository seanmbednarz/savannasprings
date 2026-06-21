import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default 'primary' */
  variant?: 'primary' | 'accent' | 'water' | 'secondary' | 'outline' | 'ghost';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Pill (fully rounded) or rounded-rect. @default 'pill' */
  shape?: 'pill' | 'rounded';
  /** Stretch to full container width. @default false */
  block?: boolean;
  disabled?: boolean;
  /** Show a spinner and block interaction. @default false */
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

/**
 * Primary call-to-action button for Savanna Springs.
 * @startingPoint section="Actions" subtitle="Buttons in every brand variant & size" viewport="700x260"
 */
export function Button(props: ButtonProps): React.ReactElement;
