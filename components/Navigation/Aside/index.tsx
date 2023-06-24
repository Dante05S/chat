import React, { useEffect, useRef } from 'react';

// Components
import { CSSTransition } from 'react-transition-group';
import ContentAside from './ContentAside';

interface Props {
  children: React.ReactNode;
  show: boolean;
  toggle: () => void;
  position?: 'left' | 'right';
  padding?: boolean;
}

export default function Aside({
  children,
  show,
  toggle,
  position = 'left',
  padding = true
}: Props): JSX.Element | null {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show) {
      document.body.className += ' overflow-hidden';
    } else {
      document.body.className = document.body.className.replace(
        ' overflow-hidden',
        ''
      );
    }
  }, [show]);

  return (
    <CSSTransition
      in={show}
      nodeRef={nodeRef}
      timeout={500}
      classNames={position}
      unmountOnExit
    >
      <ContentAside
        ref={nodeRef}
        toggle={toggle}
        position={position}
        padding={padding}
        show={show}
      >
        {children}
      </ContentAside>
    </CSSTransition>
  );
}
