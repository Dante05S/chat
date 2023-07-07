// React
import React, { forwardRef } from 'react';

// Components
import InputLabel from './InputLabel';
import FormControl from '../Form/FormControl';
import FormHelperText from 'components/Form/FormHelperText';
import Field, { type FieldProps } from './Field';
import useForm from 'hooks/useForm';

interface Props extends FieldProps {
  children?: React.ReactNode;
  id: string;
  error?: boolean;
  helperText?: string;
  required?: boolean;
  label?: string;
  name?: string;
  select?: boolean;
  multiline?: boolean;
  disabled?: boolean;
  max?: string;
  color?: 'primary' | 'primary-font';
}

const TextField = forwardRef<HTMLInputElement, Props>(function TextField(
  {
    children,
    id,
    error,
    helperText,
    label,
    required,
    name,
    select = false,
    multiline = false,
    type = 'text',
    endIcon,
    disabled = false,
    max,
    color = 'primary-font',
    ...rest
  },
  ref
): JSX.Element {
  const muiForm = useForm();

  return (
    <FormControl
      error={
        (error ?? false) || muiForm?.errors.some((err) => err.field === name)
      }
      required={required}
    >
      {label !== undefined && (
        <InputLabel htmlFor={id} color={color}>
          {label}
        </InputLabel>
      )}
      <Field
        ref={ref}
        id={id}
        type={type}
        name={name}
        disabled={disabled}
        endIcon={endIcon}
        {...rest}
      />
      <FormHelperText>
        {(helperText !== undefined &&
          (muiForm === undefined ||
            !muiForm?.errors.some((err) => err.field === name))) ||
        (helperText !== undefined && (error ?? false))
          ? helperText
          : muiForm?.errors.find((err) => err.field === name)?.error}
      </FormHelperText>
    </FormControl>
  );
});

export default TextField;
