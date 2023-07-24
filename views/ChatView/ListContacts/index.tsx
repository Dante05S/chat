/* eslint-disable @typescript-eslint/no-empty-function */
import Search from 'components/Search';
import React, { useState } from 'react';
import Contacts from './Contacts';
import ListMessages from './ListMessages';
import { useMediaQuery } from 'usehooks-ts';
import clsx from 'clsx';
import Button from 'components/Buttons/Button';
import { AiOutlineUserAdd } from 'react-icons/ai';
import Aside from 'components/Navigation/Aside';
import AddContact from '../AddContact';
import useModal from 'hooks/useModal';

export default function ListContacts(): React.JSX.Element {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [isOpen, toggle] = useModal();
  const [isBottom, setBottom] = useState<boolean>(false);

  const isScrollBottom = (e: React.UIEvent<HTMLDivElement, UIEvent>): void => {
    const scrollHeight = e.currentTarget.scrollHeight;
    const clientHeight = e.currentTarget.clientHeight;
    if (
      !isBottom &&
      e.currentTarget.scrollTop >= scrollHeight - clientHeight - 48
    ) {
      setBottom(true);
    } else if (e.currentTarget.scrollTop < scrollHeight - clientHeight) {
      setBottom(false);
    }
  };

  return (
    <div
      className={clsx('relative flex flex-col gap-4', {
        'h-full pr-3 scroll': isDesktop
      })}
      onScroll={isScrollBottom}
    >
      <Search />
      <div className="flex flex-col gap-3 mt-1.5">
        <h4 className="text-primary font-light">CONTACTOS</h4>
        <Contacts />
      </div>
      <div className="flex flex-col mt-2">
        <h4 className="text-primary font-light">CHATS</h4>
        <ListMessages isBottom={isBottom} />
      </div>
      {!isBottom && (
        <div className="hidden lg:flex 3xl:hidden w-full justify-end h-12 z-10 sticky bottom-3">
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
      {isDesktop && (
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
    </div>
  );
}
