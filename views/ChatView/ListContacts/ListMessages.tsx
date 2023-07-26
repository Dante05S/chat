import Avatar from 'components/Display/Avatar';
import Aside from 'components/Navigation/Aside';
import useModal from 'hooks/useModal';
import React from 'react';
import Chat from '../Chat';
import Header from '../Chat/Header';
import { useMediaQuery } from 'usehooks-ts';
import Button from 'components/Buttons/Button';
import { AiOutlineUserAdd } from 'react-icons/ai';
import AddContact from '../AddContact';

interface Props {
  isBottom: boolean;
}

function Message(): React.JSX.Element {
  return (
    <div className="flex items-center w-full py-3">
      <div className="flex flex-grow-0">
        <Avatar src="/static/image.png" size={49} />
      </div>
      <div className="flex flex-col w-[calc(100%_-_49px)] flex-grow pl-3">
        <div className="flex items-center">
          <div className="flex flex-grow items-center overflow-hidden">
            <span className="text-base truncate">Alejandro Bedoya Sanchez</span>
            <div className="ml-1.5 rounded-full bg-success w-2.5 h-2.5 min-h-[0.625rem] min-w-[0.625rem]" />
          </div>
          <div className="ml-1.5 whitespace-nowrap">
            <span className="text-xs font-light">12:30 P.M.</span>
          </div>
        </div>
        <div className="flex items-center mt-0.5">
          <div className="flex flex-grow overflow-hidden">
            <span className="text-sm truncate">
              Hola, como estas?shdjsdjshdjshjd hsjdjs
            </span>
          </div>
          <div className="flex items-center justify-center rounded-full w-5 h-5 min-h-[1.25rem] min-w-[1.25rem] ml-1.5 bg-primary">
            <span className="text-xs">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ListMessages({ isBottom }: Props): React.JSX.Element {
  const [isOpen, toggle] = useModal();
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <>
      <div className="relative flex flex-col items-center w-full">
        {[1, 2, 3].map((item) => (
          <button key={item} className="w-full" onClick={toggle}>
            <Message />
          </button>
        ))}
        {isBottom && (
          <div className="hidden lg:flex w-full justify-end h-12 z-10 absolute bottom-3">
            <div className="w-12 h-12">
              <Button
                variant="rounded"
                onClick={() => {
                  toggle();
                }}
              >
                <AiOutlineUserAdd className="text-2xl" />
              </Button>
            </div>
          </div>
        )}
      </div>
      {!isDesktop ? (
        <Aside
          full
          show={isOpen}
          toggle={toggle}
          position="right"
          padding={false}
          labelHeader={<Header />}
          stickyHeader
        >
          <Chat />
        </Aside>
      ) : (
        <Aside
          show={isOpen}
          toggle={toggle}
          position="right"
          padding={false}
          labelHeader="Contactos"
        >
          <AddContact />
        </Aside>
      )}
    </>
  );
}
