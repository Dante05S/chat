import React, { forwardRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

// Components
import IconButton from 'components/Buttons/IconButton';

// Icons
import { MdClose } from 'react-icons/md';

interface Props {
  children: React.ReactNode;
  toggle: () => void;
  position?: 'left' | 'right';
  padding?: boolean;
  show: boolean;
}

const ContentAside = forwardRef<HTMLDivElement, Props>(function ContentAside(
  { children, show, toggle, position = 'left', padding = true },
  ref
): JSX.Element | null {
  const [mounted, setMounted] = useState<boolean>(true);

  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  return mounted
    ? createPortal(
        <>
          <div
            onClick={() => {
              if (show) toggle();
            }}
            className="bg-pane fixed bottom-0 right-0 w-full h-full z-[46]"
          />

          <div
            ref={ref}
            className={clsx(
              'fixed z-50 top-0 bg-secondary text-secondary-font',
              'w-full xs:w-96 h-full shadow-md',
              {
                'left-0': position === 'left',
                'right-0': position === 'right'
              }
            )}
          >
            <div className="w-full p-2 flex">
              <IconButton
                onClick={() => {
                  toggle();
                }}
              >
                <MdClose />
              </IconButton>
            </div>
            <div
              className={clsx('scroll h-[calc(100%_-_60px)] bg-inherit', {
                'p-3 pt-0': padding
              })}
            >
              {children}
            </div>
          </div>
        </>,
        document.getElementById('aside') as HTMLElement
      )
    : null;
});

export default ContentAside;
