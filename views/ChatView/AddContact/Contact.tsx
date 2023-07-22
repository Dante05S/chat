import Button from 'components/Buttons/Button';
import Avatar from 'components/Display/Avatar';
import React from 'react';
import { IoMdAdd, IoMdClose, IoMdCheckmark } from 'react-icons/io';

interface Props {
  type: string;
}

export default function Contact({ type }: Props): React.JSX.Element {
  return (
    <div className="flex items-center w-full py-2">
      <div className="flex flex-grow-0">
        <Avatar src="/static/image.png" size={49} />
      </div>
      <div className="flex flex-col w-[calc(100%_-_85px)] flex-grow px-3">
        <div className="flex items-center">
          <div className="flex flex-grow items-center overflow-hidden">
            <span className="text-base truncate leading-tight">
              Alejandro Bedoya Sanchez
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex flex-grow overflow-hidden">
            <span className="text-sm font-normal opacity-50 truncate">
              Hola, gayshdjsdjshdjshjd hsjdjs
            </span>
          </div>
        </div>
      </div>
      <div className="flex">
        <Button
          variant="rounded"
          color={type === 'pending' ? 'error' : 'primary'}
        >
          <div className="flex items-center text-xl">
            {type === 'add' && <IoMdAdd />}
            {type === 'request' && <IoMdCheckmark />}
            {type === 'pending' && <IoMdClose />}
          </div>
        </Button>
      </div>
    </div>
  );
}
