import PageLayout from 'layouts/PageLayout';
import Link from 'next/link';
import React from 'react';
import FormLogin from './FormLogin';

export default function LoginView(): React.JSX.Element {
  return (
    <PageLayout overflow={false}>
      <div className="flex flex-col gap-4 items-center h-full">
        <h1 className="text-3xl font-semibold text-center">Inicia sesión💜</h1>
        <p className="text-sm">
          ¿Aún no tienes una cuenta?{' '}
          <Link href="/">
            <span className="text-primary hover:underline">Registrate</span>
          </Link>
        </p>
        <FormLogin />
      </div>
    </PageLayout>
  );
}
