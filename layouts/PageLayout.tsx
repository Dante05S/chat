import React from 'react';
import Footer from 'components/Footer';
import NavBar from 'components/Navbar';

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props): JSX.Element {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
