import PageLayout from 'layouts/PageLayout';
import Image from 'next/image';
import React, { useState } from 'react';
import CodeInputs, { type ICodeInputs } from './CodeInputs';
import Button from 'components/Buttons/Button';
import TimerCode from './TimerCode';

export default function CodeVerificationView(): React.JSX.Element {
  const [codeInputs, setCodeInputs] = useState<ICodeInputs>({
    sms_token1: '',
    sms_token2: '',
    sms_token3: '',
    sms_token4: ''
  });

  const handleCodeInputs = (newCodeInputs: ICodeInputs): void => {
    setCodeInputs(newCodeInputs);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(codeInputs);
  };

  return (
    <PageLayout overflow={false}>
      <div className="flex items-center justify-center h-full w-full">
        <div className="flex flex-col items-center gap-4 w-full max-w-2xl">
          <div className="flex flex-col items-center gap-4 mb-3">
            <h1 className="text-3xl font-semibold text-center">
              Verifica tu telefono💜
            </h1>
            <p className="text-base font-semibold text-center">
              Verifica el codigo que se te envio a tu telefono para completar el
              inicio de sesión
            </p>
          </div>
          <Image
            src="/static/mobile-app.svg"
            alt="mobile verification code"
            width={300}
            height={300}
          />
          <div className="flex flex-col items-center gap-4 mt-3">
            <p className="text-base font-semibold text-center">
              Hola{' '}
              <span className="text-primary">Alejandro Bedoya Sanchez</span>, se
              ha enviado un mensaje al teléfono{' '}
              <span className="text-primary whitespace-nowrap">
                +57 321 840 3738
              </span>{' '}
              con un código para verificar tu cuenta.
            </p>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
              <div className="flex flex-col w-full items-center gap-6">
                <CodeInputs
                  codeInputs={codeInputs}
                  onChange={handleCodeInputs}
                />
                <Button type="submit">Validar código</Button>
                <TimerCode />
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
