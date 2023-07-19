import React, { forwardRef } from 'react';
import clsx from 'clsx';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'contrast'
    | 'wellthy'
    | 'quaternary';
  variant?: 'rounded' | 'contained' | 'sharp';
  opacity?: string;
  font?: string;
  padding?: string;
  loading?: boolean;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  {
    children,
    color = 'primary',
    variant = 'contained',
    font = 'text-md',
    padding = 'p-1.5',
    opacity = 'opacity-100',
    loading = false,
    disabled = false,
    ...rest
  },
  ref
): JSX.Element {
  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled || loading}
      className={clsx(
        'w-full h-full transition duration-300 disabled:bg-[rgba(0,_0,_0,_0.12)]',
        'disabled:text-[rgba(0,_0,_0,_0.12)]',
        font,
        opacity,
        {
          'text-primary-font bg-primary hover:text-primary-font hover:bg-primary-dark':
            color === 'primary',
          'rounded-lg': variant === 'contained',
          'rounded-none': variant === 'sharp',
          'rounded-full': variant === 'rounded'
        }
      )}
      {...rest}
    >
      <div className="flex items-center justify-center">{children}</div>
    </button>
  );
});

export default Button;
