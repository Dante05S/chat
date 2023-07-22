import React from 'react';
import clsx from 'clsx';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
}

export default function IconButton({
  children,
  color = 'primary',
  disabled = false,
  type = 'button',
  ...rest
}: Props): React.JSX.Element {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx(
        'rounded-full w-fit h-fit p-1.5 text-2xl leading-none transition duration-300',
        {
          'hover:text-primary-font hover:bg-primary': color === 'primary',
          'hover:text-secondary-font hover:bg-secondary': color === 'secondary',
          'text-neutral-300 hover:bg-transparent hover:text-neutral-300':
            disabled
        }
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
