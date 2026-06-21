import * as React from 'react';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Bold heading line. */
  title?: string;
  /** @default 'info' */
  tone?: 'info' | 'success' | 'warning' | 'danger' | 'brand';
  icon?: React.ReactNode;
  /** Show a dismiss button wired to this handler. */
  onClose?: () => void;
  children?: React.ReactNode;
}

/** Inline message banner with semantic tone. */
export function Alert(props: AlertProps): React.ReactElement;
