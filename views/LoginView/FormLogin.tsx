import Button from 'components/Buttons/Button';
import Form from 'components/Form';
import InputIcon from 'components/Inputs/InputIcon';
import TextField from 'components/Inputs/TextField';
import ShowPassword from 'components/ShowPassword';
import { type ValidationField } from 'helpers/Validator';
import { type Login, type User } from 'models/User.interface';
import React, { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import validationsPassword from 'utils/validationsPassword';

const INIT_USER: Login = {
  email: '',
  password: ''
};

const validations: ValidationField = {
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

  const handleSubmit = (user: User): void => {
    console.log(user);
  };
  return (
    <div className="mt-1 w-full xs:max-w-md xxs:px-3">
      <Form
        initValues={INIT_USER}
        onSubmit={handleSubmit}
        validations={validations}
      >
        <div className="flex flex-col gap-4 w-full">
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
            Iniciar sesión
          </Button>
        </div>
      </Form>
    </div>
  );
}
