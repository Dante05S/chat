import SpinnerPong from 'components/Animations/SpinnerPong';
import React from 'react';

export default function Loading(): React.JSX.Element {
  return (
    <div className="flex flex-col gap-3 items-center">
      <SpinnerPong />
      <p className="text-lg">Cargando...</p>
    </div>
  );
}
