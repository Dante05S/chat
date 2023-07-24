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
      <main className="grow lg:h-[calc(100%_-_176px)]">
        <div className="relative lg:h-full py-3 px-3">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
