import React from 'react';
import BoxMessage from './BoxMessage';

export default function Messages(): React.JSX.Element {
  return (
    <div className="flex flex-col">
      <BoxMessage rol="receiver" />
      <BoxMessage rol="transmitter" />
      <BoxMessage rol="transmitter" />
      <BoxMessage rol="receiver" />
      <BoxMessage rol="receiver" />
      <BoxMessage rol="transmitter" />
      <BoxMessage rol="transmitter" />
      <BoxMessage rol="receiver" />
      <BoxMessage rol="transmitter" />
      <BoxMessage rol="transmitter" />
      <BoxMessage rol="receiver" />
    </div>
  );
}
