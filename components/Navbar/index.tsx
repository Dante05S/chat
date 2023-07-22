// React
import React from 'react';

// Components
import Logo from './Logo';
import User from './User';

export default function NavBar(): React.JSX.Element {
  return (
    <header>
      <nav className="py-3 px-3 xxs:px-5 flex justify-between items-center">
        <Logo />
        <User />
      </nav>
    </header>
  );
}
