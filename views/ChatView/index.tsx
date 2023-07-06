// React
import React from 'react';

// Components
import PageLayout from 'layouts/PageLayout';
import Search from 'components/Search';
import Contacts from './Contacts';
import ListMessages from './ListMessages';

export default function ChatView(): JSX.Element {
  return (
    <PageLayout>
      <div className="flex flex-col gap-4">
        <Search />
        <div className="flex flex-col gap-3 mt-1.5">
          <h4 className="text-primary font-light">CONTACTOS</h4>
          <Contacts />
        </div>
        <div className="flex flex-col mt-2">
          <h4 className="text-primary font-light">CHATS</h4>
          <ListMessages />
        </div>
      </div>
    </PageLayout>
  );
}
