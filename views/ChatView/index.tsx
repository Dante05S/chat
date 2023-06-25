// React
import React from 'react';

// Components
import PageLayout from 'layouts/PageLayout';
import Search from 'components/Search';
import Contacts from './Contacts';

export default function ChatView(): JSX.Element {
  return (
    <PageLayout>
      <div className="flex flex-col gap-4">
        <Search />
        <Contacts />
      </div>
    </PageLayout>
  );
}
