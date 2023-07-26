import React from 'react';
import Footer from 'components/Footer';
import NavBar from 'components/Navbar';
import clsx from 'clsx';

interface Props {
  overflow?: boolean;
  children: React.ReactNode;
}

export default function PageLayout({
  children,
  overflow = true
}: Props): React.JSX.Element {
  return (
    <div className="flex flex-col h-full">
      <NavBar />
      <main
        className={clsx('grow', {
          'lg:h-[calc(100%_-_176px)]': overflow
        })}
      >
        <div className="relative h-full pt-3 pb-7 px-3">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
