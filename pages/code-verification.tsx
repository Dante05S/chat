import PageProvider from 'context/PageContext/PageProvider';
import React from 'react';
import CodeVerificationView from 'views/CodeVerificationView';

export default function CodeVerification(): React.JSX.Element {
  return (
    <PageProvider description="Verificación">
      <CodeVerificationView />
    </PageProvider>
  );
}
