import React from 'react';

// Components
import Messages from './Messages';
import InputSend from './InputSend';

export default function Chat(): React.JSX.Element {
  return (
    <div className="flex w-full relative flex-col">
      <Messages />
      <InputSend />
    </div>
  );
}
