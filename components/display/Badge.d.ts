import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default 'navy' */
  color?: 'navy' | 'water' | 'sun' | 'orange' | 'success' | 'danger' | 'neutral';
  /** @default 'soft' */
  variant?: 'soft' | 'solid';
  /** @default 'md' */
  size?: 'sm' | 'md';
  iconLeft?: React.ReactNode;
  children?: React.ReactNode;
}

/** Small status / label pill. */
export function Badge(props: BadgeProps): React.ReactElement;
