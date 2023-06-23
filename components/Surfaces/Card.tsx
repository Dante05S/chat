import clsx from 'clsx';
import React from 'react';

interface Props {
  children: React.ReactNode;
  spacing?: string;
  height?: string;
  overflowHidden?: boolean;
}

export default function Card({
  children,
  spacing = 'p-2',
  height = 'h-fit',
  overflowHidden = true
}: Props): JSX.Element {
  return (
    <div
      className={clsx(
        'w-full shadow bg-secondary flex flex-col rounded-lg text-primary-font',
        spacing,
        height,
        {
          'overflow-hidden': overflowHidden
        }
      )}
    >
      {children}
    </div>
  );
}
