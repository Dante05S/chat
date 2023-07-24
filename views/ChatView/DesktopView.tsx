import React from 'react';
import ListContacts from './ListContacts';
import Chat from './Chat';
import AddContact from './AddContact';
import { useMediaQuery } from 'usehooks-ts';
import clsx from 'clsx';

export default function DesktopView(): React.JSX.Element {
  const matches = useMediaQuery('(min-width: 1430px)');

  return (
    <div className="flex w-full h-full max-w-screen-3xl 3xl:m-auto">
      <div
        className={clsx({
          'w-1/4': matches,
          'w-[30%]': !matches
        })}
      >
        <ListContacts />
      </div>
      <div
        className={clsx({
          'w-1/2': matches,
          'w-[70%]': !matches
        })}
      >
        <Chat />
      </div>
      {matches && (
        <div className="w-1/4">
          <AddContact />
        </div>
      )}
    </div>
  );
}
