import React from 'react';

// Components
import Messages from './Messages';
import InputSend from './InputSend';
import clsx from 'clsx';
import { useMediaQuery } from 'usehooks-ts';
import HeaderBar from 'components/Surfaces/HeaderBar';
import Header from './Header';

export default function Chat(): React.JSX.Element {
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div
      className={clsx('flex w-full relative flex-col', {
        'h-full scroll bg-secondary': isDesktop
      })}
    >
      {isDesktop && (
        <HeaderBar sticky>
          <div className="flex w-full py-3">
            <Header />
          </div>
        </HeaderBar>
      )}
      <Messages />
      <InputSend />
    </div>
  );
}
