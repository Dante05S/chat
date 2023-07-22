import clsx from 'clsx';
import TabsContext from 'context/TabsContext';
import useDrag from 'hooks/useDrag';
import React, { useMemo, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

interface PropsTabs {
  value: string;
  onChange?: (newValue: string) => void;
  scrollButtons?: boolean;
  children: React.ReactNode;
}

interface PropsButton {
  disabled: boolean;
  moveTo: (direction: 'right' | 'left', scrollVelocity?: number) => void;
}

function LeftButton({ disabled, moveTo }: PropsButton): React.JSX.Element {
  return (
    <div className="flex items-center justify-center min-w-[2.5rem] w-10">
      <button
        onClick={() => {
          moveTo('left');
        }}
      >
        {!disabled && <IoIosArrowBack className="text-xl" />}
      </button>
    </div>
  );
}

function RightButton({ disabled, moveTo }: PropsButton): React.JSX.Element {
  return (
    <div className="flex items-center justify-center min-w-[2.5rem] w-10">
      <button
        onClick={() => {
          moveTo('right');
        }}
      >
        {!disabled && <IoIosArrowForward className="text-xl" />}
      </button>
    </div>
  );
}

export default function Tabs({
  value,
  onChange,
  scrollButtons = false,
  children
}: PropsTabs): React.JSX.Element {
  const tabsRef = useRef<HTMLDivElement>(null);
  const [widthLine, setWidthLine] = useState(0);
  const [offsetLeft, setOffsetLeft] = useState(0);

  const onChangeWitdthLine = (width: number): void => {
    setWidthLine(width);
  };

  const onChangeOffsetLeft = (offset: number): void => {
    setOffsetLeft(offset);
  };

  const {
    onDragging,
    onDragStart,
    isDragging,
    disabledIconLeft,
    disabledIconRight,
    moveTo
  } = useDrag(tabsRef, 'x');

  const childContext = useMemo(() => {
    return {
      value,
      onChange,
      onChangeWitdthLine,
      onChangeOffsetLeft
    };
  }, [value, onChange, onChangeWitdthLine, onChangeOffsetLeft]);

  return (
    <TabsContext.Provider value={childContext}>
      <div
        className={clsx('flex w-full min-h-[48px] h-full', 'overflow-hidden')}
      >
        {scrollButtons && (
          <LeftButton disabled={disabledIconLeft} moveTo={moveTo} />
        )}

        <div
          className={clsx('flex w-full overflow-x-hidden', {
            'scroll-auto': isDragging,
            'scroll-smooth': !isDragging
          })}
          ref={tabsRef}
          onTouchMove={onDragging}
          onTouchStart={onDragStart}
        >
          <ul className="flex relative w-full">
            {children}
            <div
              className="absolute bottom-0 left-0 h-1 bg-primary transition-all duration-500"
              style={{
                width: widthLine,
                left: offsetLeft
              }}
            />
          </ul>
        </div>
        {scrollButtons && (
          <RightButton disabled={disabledIconRight} moveTo={moveTo} />
        )}
      </div>
    </TabsContext.Provider>
  );
}
