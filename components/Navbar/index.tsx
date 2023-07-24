// React
import React from 'react';

// Components
import Logo from './Logo';
import User from './User';

export default function NavBar(): React.JSX.Element {
  return (
    <header>
      <nav className="py-3 px-3 xxs:px-5 flex justify-between items-center max-w-screen-3xl 3xl:m-auto 3xl:px-0">
        <Logo />
        <User />
      </nav>
    </header>
  );
}
