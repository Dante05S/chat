import React from 'react';
import Footer from 'components/Footer';
import NavBar from 'components/Navbar';

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props): React.JSX.Element {
  return (
    <div className="flex flex-col h-full">
      <NavBar />
      <main className="flex-grow">
        <div className="relative py-3 px-3 xxs:px-5">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
