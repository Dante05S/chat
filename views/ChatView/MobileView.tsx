import React from 'react';
import ListContacts from './ListContacts';
import Button from 'components/Buttons/Button';
import { AiOutlineUserAdd } from 'react-icons/ai';
import Aside from 'components/Navigation/Aside';
import AddContact from './AddContact';
import useModal from 'hooks/useModal';

export default function MobileView(): React.JSX.Element {
  const [isOpen, toggle] = useModal();
  return (
    <>
      <ListContacts />
      <div className="fixed w-16 h-16 z-10 right-3 bottom-3">
        <Button
          variant="rounded"
          onClick={() => {
            toggle();
          }}
        >
          <AiOutlineUserAdd className="text-3xl" />
        </Button>
      </div>
      <Aside
        full
        show={isOpen}
        toggle={toggle}
        position="right"
        padding={false}
        labelHeader="Contactos"
      >
        <AddContact />
      </Aside>
    </>
  );
}
