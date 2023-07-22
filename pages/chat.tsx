// React
import React from 'react';

// Components
import ChatView from 'views/ChatView';

// Context
import PageProvider from 'context/PageContext/PageProvider';

export default function chat(): React.JSX.Element {
  return (
    <PageProvider description="Chat App">
      <ChatView />
    </PageProvider>
  );
}
