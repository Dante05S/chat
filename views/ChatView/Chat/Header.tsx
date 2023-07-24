import IconButton from 'components/Buttons/IconButton';
import Avatar from 'components/Display/Avatar';
import React from 'react';

// Icons
import { IoIosArrowBack } from 'react-icons/io';
import { FiTrash } from 'react-icons/fi';
import useAside from 'hooks/useAside';
import { useMediaQuery } from 'usehooks-ts';

export default function Header(): React.JSX.Element {
  const { toggle } = useAside();
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="flex items-center flex-grow w-full">
      {!isDesktop ? (
        <button onClick={toggle}>
          <div className="flex items-center">
            <IoIosArrowBack className="text-3xl" />
            <Avatar src="/static/image.png" size={40} />
          </div>
        </button>
      ) : (
        <div className="flex items-center">
          <Avatar src="/static/image.png" size={40} />
        </div>
      )}

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
  );
}
