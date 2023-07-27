import React from 'react';

// Hooks
import useTimer from 'hooks/useTimer';

export default function TimerCode(): JSX.Element {
  const { timer } = useTimer(45);

  return (
    <div className="flex flex-col gap-1 items-center">
      <span className="text-base font-light">¿No recibiste tu código?</span>
      {timer !== '00' ? (
        <p className="text-primary font-semibold">
          Enviar otro código en {timer}seg
        </p>
      ) : (
        <div className="cursor-pointer animate-scale">
          <p className="text-primary font-semibold">Reenviar código</p>
        </div>
      )}
    </div>
  );
}
