import clsx from 'clsx';
import Avatar from 'components/Display/Avatar';
import React from 'react';

interface BoxMessageProps {
  rol: 'receiver' | 'transmitter';
}

export default function BoxMessage({ rol }: BoxMessageProps): JSX.Element {
  return (
    <div
      className={clsx('flex flex-col px-5 py-1.5 w-fit max-w-[90%]', {
        'self-start': rol === 'receiver',
        'self-end': rol === 'transmitter'
      })}
    >
      <div
        className={clsx('flex items-center', {
          'self-start': rol === 'receiver',
          'self-end': rol === 'transmitter'
        })}
      >
        {rol === 'receiver' && <Avatar src="/static/image.png" size={30} />}
        <span className="text-sm font-medium ml-2.5">10:42 am</span>
      </div>
      <div
        className={clsx('flex px-4 py-2 rounded-xl mt-1 max-w-full w-fit', {
          'bg-tertiary rounded-tl-none pr-5': rol === 'receiver',
          'bg-primary rounded-tr-none pl-5': rol === 'transmitter'
        })}
      >
        <span className="text-base [word-break:break-word;]">Hola</span>
      </div>
    </div>
  );
}
