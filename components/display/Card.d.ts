import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** @default 'elevated' */
  variant?: 'elevated' | 'soft' | 'outline' | 'water' | 'brand';
  /** @default 'md' */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Lift + deepen shadow on hover. @default false */
  hoverable?: boolean;
  /** Render as another element/tag. @default 'div' */
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

/**
 * Rounded surface container for grouped content.
 * @startingPoint section="Display" subtitle="Cards in five brand variants" viewport="700x300"
 */
export function Card(props: CardProps): React.ReactElement;
