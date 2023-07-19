import React, { forwardRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

// Components
import IconButton from 'components/Buttons/IconButton';

// Icons
import { MdClose } from 'react-icons/md';
import useAside from 'hooks/useAside';

interface Props {
  children: React.ReactNode;
}

const ContentAside = forwardRef<HTMLDivElement, Props>(function ContentAside(
  { children },
  ref
): JSX.Element | null {
  const { show, toggle, full, position, header, padding } = useAside();
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
              'h-full shadow-md',
              {
                'w-full xs:w-96': !full,
                'w-full': full,
                'left-0': position === 'left',
                'right-0': position === 'right'
              }
            )}
          >
            {header && (
              <div className="w-full p-2 flex">
                <IconButton
                  onClick={() => {
                    toggle();
                  }}
                >
                  <MdClose />
                </IconButton>
              </div>
            )}

            <div
              className={clsx('scroll bg-inherit', {
                'p-3 pt-0': padding,
                'h-[calc(100%_-_60px)]': header,
                'h-full': !header
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
