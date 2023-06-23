import Link from 'next/link';
import React from 'react';
import socialNetworks from 'utils/socialNetworks';

export default function Footer(): JSX.Element {
  return (
    <footer className="w-full bg-secondary flex flex-col items-center justify-center p-5">
      <p>Made with ❤️ by Alejandro Bedoya Sanchez</p>
      <div className="flex items-center mt-3">
        <ul className="flex items-center gap-3">
          {socialNetworks.map((socialNetwork) => {
            const Icon = socialNetwork.icon;
            return (
              <li key={socialNetwork.key} className="group">
                <Link href={socialNetwork.href} target="_blank">
                  <Icon className="text-3xl group-hover:scale-125 transition-transform" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
