/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { forwardRef, type HTMLInputTypeAttribute } from 'react';
import useForm from 'hooks/useForm';
import validator from 'helpers/Validator';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: HTMLInputTypeAttribute;
  name?: string;
  maxLength?: number;
  holdMayus?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    handleChangeForm?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    setValuesForm?: (field: string, value: string) => void
  ) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    type = 'text',
    name = '',
    maxLength,
    minLength,
    holdMayus = false,
    onChange,
    ...rest
  },
  ref
): React.JSX.Element {
  const muiForm = useForm();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (holdMayus) {
      e.target.value = e.target.value.toUpperCase();
    }

    if (
      maxLength !== undefined &&
      !validator.string.maxlength(e.target.value, maxLength)
    ) {
      return;
    }

    if (onChange !== undefined)
      onChange(
        e,
        muiForm?.handleChange !== undefined ? muiForm.handleChange : () => {},
        muiForm?.setValuesForm !== undefined ? muiForm.setValuesForm : () => {}
      );
    else muiForm?.handleChange(e);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (type !== 'number' && type !== 'tel') return;
    if (!validator.number.isDigit(e.key) && e.key !== 'Backspace') {
      e.preventDefault();
    }
  };

  return (
    <input
      ref={ref}
      type={type}
      name={name}
      value={muiForm?.values[name] ?? ''}
      onChange={handleChange}
      onKeyDown={onKeyDown}
      {...rest}
    />
  );
});

export default Input;
