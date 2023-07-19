import React from 'react';
import { AsideContext } from '.';

interface Props {
  show: boolean;
  toggle: () => void;
  position?: 'left' | 'right';
  padding?: boolean;
  full?: boolean;
  header?: boolean;
  children: React.ReactNode;
}

export default function AsideProvider({
  show,
  toggle,
  position = 'left',
  padding = true,
  full = false,
  header = true,
  children
}: Props): JSX.Element {
  return (
    <AsideContext.Provider
      value={{
        show,
        toggle,
        position,
        padding,
        full,
        header
      }}
    >
      {children}
    </AsideContext.Provider>
  );
}
