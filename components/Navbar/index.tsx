// Next
import Link from 'next/link';

// React
import React from 'react';

export default function NavBar(): JSX.Element {
  return (
    <header>
      <nav>
        <div className="font-logo text-2xl">
          <Link href="/">
            <div className="hover:text-primary">
              Chat.<span className="text-primary">ABS</span>
              {'()'}
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
