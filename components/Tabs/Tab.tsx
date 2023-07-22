import clsx from 'clsx';
import useTabs from 'hooks/useTabs';
import ResizeObserver from 'rc-resize-observer';
import React, { useRef, useEffect } from 'react';

interface Props {
  value: string;
  label: string;
}

export default function Tab({ value, label }: Props): JSX.Element {
  const muiTabs = useTabs();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const resizeLine = (): void => {
    if (buttonRef.current !== null) {
      muiTabs.onChangeWitdthLine(buttonRef.current.offsetWidth);
      muiTabs.onChangeOffsetLeft(buttonRef.current.offsetLeft);
    }
  };

  const onClick = (): void => {
    if (muiTabs.onChange === undefined) return;
    resizeLine();
    muiTabs.onChange(value);
  };

  useEffect(() => {
    if (value === muiTabs.value) {
      resizeLine();
    }
  }, [buttonRef]);

  return (
    <>
      <ResizeObserver
        onResize={() => {
          if (value === muiTabs.value) {
            resizeLine();
          }
        }}
      >
        <li className="flex items-center justify-center select-none whitespace-nowrap cursor-pointer min-w-min grow">
          <button
            ref={buttonRef}
            onClick={onClick}
            className={clsx(
              'uppercase py-3 px-4 transition duration-300 w-full whitespace-normal',
              {
                'text-primary font-semibold': value === muiTabs.value,
                'text-primary-font hover:text-primary hover:bg-primary-dark/50':
                  value !== muiTabs.value
              }
            )}
          >
            {label}
          </button>
        </li>
      </ResizeObserver>
    </>
  );
}
