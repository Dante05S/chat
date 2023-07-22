import clsx from 'clsx';
import useAside from 'hooks/useAside';
import React from 'react';

export default function HeaderAside(): React.JSX.Element {
  const { toggle, labelHeader, iconHeader, stickyHeader } = useAside();
  const Icon = iconHeader;
  return (
    <div
      className={clsx(
        'flex items-center bg-[rgba(0,0,0,0.6)] w-full h-16 px-2 backdrop-blur-sm',
        {
          'sticky z-10 top-0': stickyHeader
        }
      )}
    >
      {typeof labelHeader === 'string' ? (
        <button
          onClick={() => {
            toggle();
          }}
        >
          <div className="flex items-center">
            <>
              <Icon className="text-2xl" />
              <h4 className="font-semibold uppercase ml-1">{labelHeader}</h4>
            </>
          </div>
        </button>
      ) : (
        labelHeader
      )}
    </div>
  );
}
