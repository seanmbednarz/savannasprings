import * as React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. Falls back to initials when absent. */
  src?: string;
  /** Full name — drives initials and alt text. */
  name?: string;
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Initials background tint. @default 'navy' */
  color?: 'navy' | 'water' | 'sun' | 'orange';
}

/** Circular avatar — photo or initials, for testimonials and staff. */
export function Avatar(props: AvatarProps): React.ReactElement;
