import React from 'react';
import { PageContext } from '.';
import Meta from 'components/Meta';

interface Props {
  title?: string;
  description: string;
  children: React.ReactNode;
}

export default function PageProvider({
  title = 'Chat.ABS()',
  description,
  children
}: Props): React.JSX.Element {
  return (
    <PageContext.Provider
      value={{
        title,
        description
      }}
    >
      <Meta />
      {children}
    </PageContext.Provider>
  );
}
