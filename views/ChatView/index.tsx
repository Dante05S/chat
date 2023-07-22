// React
import React from 'react';

// Components
import PageLayout from 'layouts/PageLayout';
import ListContacts from './ListContacts';
import Button from 'components/Buttons/Button';
import AddContact from './AddContact';
import Aside from 'components/Navigation/Aside';

// Icons
import { AiOutlineUserAdd } from 'react-icons/ai';

// Hooks
import useModal from 'hooks/useModal';

export default function ChatView(): React.JSX.Element {
  const [isOpen, toggle] = useModal();
  return (
    <PageLayout>
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
    </PageLayout>
  );
}
