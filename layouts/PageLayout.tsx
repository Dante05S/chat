import NavBar from 'components/Navbar';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props): JSX.Element {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
