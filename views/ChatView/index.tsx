// React
import React from 'react';

// Components
import PageLayout from 'layouts/PageLayout';
import ListContacts from './ListContacts';

export default function ChatView(): JSX.Element {
  return (
    <PageLayout>
      <ListContacts />
    </PageLayout>
  );
}
