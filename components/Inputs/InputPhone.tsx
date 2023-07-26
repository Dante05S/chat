/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

// React
import React, { useEffect, useRef } from 'react';
import { type E164Number } from 'libphonenumber-js/types';
import clsx from 'clsx';

// Components
import ReactPhoneInput, { type CountryData } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// Interfaces
import { type PhoneElement } from 'interfaces/phone_element.interface';

// Hooks
import useFormControl from 'hooks/useFormControl';
import getFormControlState from 'utils/formControlState';
import useForm from 'hooks/useForm';

export interface PhoneProps {
  id?: string;
  name?: string;
  variant?: 'contained' | 'code';
  value?: string;
  color?: string;
  countries?: string[];
  error?: boolean;
  endIcon?: JSX.Element;
  disabled?: boolean;
  defaultCountry?: string;
  onChange?: (
    e: PhoneElement,
    handleChangeForm?: (e: PhoneElement) => void,
    setValuesForm?: (field: string, value: string) => void
  ) => void;
  onCountryChange?: (country?: string) => void;
}

export default function InputPhone({
  name = '',
  error,
  color = '!bg-tertiary',
  disabled = false,
  defaultCountry = 'co',
  variant = 'contained',
  countries,
  onChange,
  value = '',
  onCountryChange
}: PhoneProps): JSX.Element {
  const muiForm = useForm();
  const muiFormControl = useFormControl();
  const formControlState = getFormControlState(
    { error },
    ['error'],
    muiFormControl
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (
    value: string,
    data: {} | CountryData,
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.type === 'change') {
      const e: PhoneElement = {
        target: {
          name,
          type: 'tel',
          value: `+${value}`
        }
      };
      if (onChange !== undefined)
        onChange(
          e,
          muiForm?.handleChange !== undefined ? muiForm.handleChange : () => {},
          muiForm?.setValuesForm !== undefined
            ? muiForm.setValuesForm
            : () => {}
        );
      else muiForm?.handleChange(e);
    } else if (
      event.type === 'click' &&
      Object.keys(data).length > 0 &&
      onCountryChange !== undefined
    ) {
      onCountryChange((data as CountryData).countryCode);
    }
  };

  const getValueInput = (): E164Number => {
    let phone = '';
    if (muiForm !== undefined && Object.keys(muiForm?.values).length >= 0) {
      phone = muiForm.values[name];
    } else if (value.length >= 0) {
      phone = value;
    }
    return phone;
  };

  useEffect(() => {
    if (muiForm !== undefined && muiForm.errors.length > 0) {
      console.log(muiForm.errors);
      if (inputRef.current !== null && muiForm.errors[0].field === name) {
        inputRef.current.focus();
      }
    }
  }, [muiForm?.errors]);

  return (
    <ReactPhoneInput
      inputProps={{
        ref: (el: HTMLInputElement | null) => {
          inputRef.current = el;
        }
      }}
      countryCodeEditable={false}
      disabled={disabled}
      onChange={handleChange}
      value={getValueInput()}
      country={defaultCountry}
      onlyCountries={countries}
      inputStyle={{
        width: '100%',
        height: 'unset',
        lineHeight: 'unset'
      }}
      buttonStyle={{
        borderStyle: 'none',
        paddingLeft: '5px',
        background: 'none'
      }}
      buttonClass={clsx('buttonFlag', {
        [`disabled`]: disabled
      })}
      dropdownClass="text-black dropdown"
      inputClass={clsx('!rounded-lg textField', {
        [`${color} focus:!border`]: variant === 'contained',
        '!border-0': variant === 'contained' && !formControlState.error,
        '!border !border-error': formControlState.error,
        '!bg-stone-200 text-slate-600 !cursor-default': disabled
      })}
    />
  );
}
