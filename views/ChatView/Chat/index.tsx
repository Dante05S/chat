import React from 'react';

// Components
import Header from './Header';
import Messages from './Messages';
import InputSend from './InputSend';

export default function Chat(): JSX.Element {
  return (
    <div className="flex w-full relative flex-col">
      <Header />
      <Messages />
      <InputSend />
    </div>
  );
}
