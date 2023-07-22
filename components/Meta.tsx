// Next
import usePage from 'hooks/usePage';
import Head from 'next/head';

// React
import React from 'react';

export default function Meta(): React.JSX.Element {
  const { title, description } = usePage();
  return (
    <Head>
      <>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:site_name" content="chat.abs()" />
        <meta property="og:url" content="https://chat-abs.vercel.app/" />
        <meta property="og:description" content={description} />
        <title>{title}</title>
      </>
    </Head>
  );
}
