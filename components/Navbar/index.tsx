// React
import React from 'react';

// Components
import Logo from './Logo';
import User from './User';

export default function NavBar(): JSX.Element {
  return (
    <header>
      <nav className="py-3 px-5 flex justify-between items-center">
        <Logo />
        <User />
      </nav>
    </header>
  );
}