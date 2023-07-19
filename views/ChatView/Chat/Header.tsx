import IconButton from 'components/Buttons/IconButton';
import Avatar from 'components/Display/Avatar';
import React from 'react';

// Icons
import { IoIosArrowBack } from 'react-icons/io';
import { FiTrash } from 'react-icons/fi';
import useAside from 'hooks/useAside';

export default function Header(): JSX.Element {
  const { toggle } = useAside();
  return (
    <div className="flex bg-[rgba(0,0,0,0.6)] w-full py-3 px-2 sticky z-10 top-0 backdrop-blur-sm">
      <div className="flex items-center flex-grow w-full">
        <button onClick={toggle}>
          <div className="flex items-center">
            <IoIosArrowBack className="text-3xl" />
            <Avatar src="/static/image.png" size={40} />
          </div>
        </button>
        <div className="flex flex-col px-3 w-[calc(100%_-_106px)] flex-grow">
          <div className="flex items-center overflow-hidden">
            <span className="leading-tight font-medium truncate">
              Alejandro Bedoya Sanchez
            </span>
            <div className="ml-1.5 rounded-full bg-success w-2.5 h-2.5 min-h-[0.625rem] min-w-[0.625rem]" />
          </div>
          <div className="flex overflow-hidden">
            <span className="text-sm font-normal opacity-50 truncate">
              Hola gay
            </span>
          </div>
        </div>
        <IconButton color="secondary">
          <FiTrash />
        </IconButton>
      </div>
    </div>
  );
}
