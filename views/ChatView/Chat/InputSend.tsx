import Button from 'components/Buttons/Button';
import TextField from 'components/Inputs/TextField';
import React, { useState } from 'react';

// Icons
import { BsSend } from 'react-icons/bs';

export default function InputSend(): JSX.Element {
  const [message, setMessage] = useState('');

  return (
    <div className="sticky bottom-0 w-full px-3 py-4 flex items-center">
      <div className="flex flex-grow w-full pr-3">
        <TextField
          rounded="rounded-xl"
          fontSize="text-base"
          placeholder="Escribe tu mensaje aqui"
          bgColor="bg-background"
          id="message"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>

      <div className="min-w-[3rem] w-12 min-h-12 h-[3rem]">
        <Button variant="rounded">
          <BsSend className="text-xl" />
        </Button>
      </div>
    </div>
  );
}
