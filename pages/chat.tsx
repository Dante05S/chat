// React
import React from 'react';

// Components
import ChatView from 'views/ChatView';

// Context
import PageProvider from 'context/PageContext/PageProvider';

export default function chat(): JSX.Element {
  return (
    <PageProvider title="Chat" description="Chat App">
      <ChatView />
    </PageProvider>
  );
}
