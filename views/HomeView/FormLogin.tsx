import Form from 'components/Form';
import InputIcon from 'components/Inputs/InputIcon';
import TextField from 'components/Inputs/TextField';
import { type User } from 'models/User.interface';
import { AiFillIdcard } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import React, { useRef, useState } from 'react';
import ShowPassword from 'components/ShowPassword';
import Button from 'components/Buttons/Button';
import { type ValidationField } from 'helpers/Validator';
import validationsPassword from 'utils/validationsPassword';
import { type RefInputElement } from 'components/Inputs/Input';

const INIT_USER: User = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  phone: ''
};

const validations: ValidationField = {
  first_name: [
    {
      validation: 'required',
      helperText: 'El nombre es obligatorio'
    }
  ],
  phone: [
    {
      validation: 'required',
      helperText: 'El telefono es obligatorio'
    },
    {
      validation: 'phone',
      helperText: 'El telefono no es valido'
    }
  ],
  email: [
    {
      validation: 'required',
      helperText: 'El email es obligatorio'
    },
    {
      validation: 'email',
      helperText: 'El email es invalido'
    }
  ],
  password: validationsPassword
};

export default function FormLogin(): React.JSX.Element {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const refTextField = useRef<RefInputElement>(null);

  const handleSubmit = (user: User): void => {
    console.log(user);
  };

  return (
    <div className="mt-1 w-full xs:w-fit xxs:px-3">
      <Form
        initValues={INIT_USER}
        onSubmit={handleSubmit}
        validations={validations}
      >
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col items-start xs:flex-row gap-4 xs:gap-7">
            <TextField
              ref={refTextField}
              id="first_name"
              name="first_name"
              label="Nombre"
              placeholder="Ingresa el nombre"
              endIcon={
                <InputIcon position="end">
                  <AiFillIdcard className="text-xl" />
                </InputIcon>
              }
              required
            />

            <TextField
              id="last_name"
              name="last_name"
              label="Apellidos"
              placeholder="Ingresa los apellidos"
              endIcon={
                <InputIcon position="end">
                  <AiFillIdcard className="text-xl" />
                </InputIcon>
              }
            />
          </div>
          <TextField
            id="phone"
            name="phone"
            type="tel"
            label="Telefono"
            required
            placeholder="Ingresa el telefono"
            PhoneProps={{
              variant: 'contained',
              countries: ['co', 'us'],
              defaultCountry: 'co'
            }}
          />
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            required
            placeholder="Ingresa tu email"
            endIcon={
              <InputIcon position="end">
                <MdEmail className="text-xl" />
              </InputIcon>
            }
          />
          <TextField
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            label="Contraseña"
            placeholder="Ingresa tu email"
            required
            endIcon={
              <InputIcon position="end">
                <ShowPassword
                  show={showPassword}
                  onClick={() => {
                    setShowPassword((prev) => !prev);
                  }}
                />
              </InputIcon>
            }
          />
        </div>
        <div className="w-full mt-9">
          <Button type="submit" variant="rounded">
            Crear cuenta
          </Button>
        </div>
      </Form>
    </div>
  );
}
