import clsx from 'clsx';
import Button from 'components/Buttons/Button';
import Avatar from 'components/Display/Avatar';
import Badge from 'components/Display/Badge';
import useDrag from 'hooks/useDrag';
import { type PropsButton } from 'interfaces/props_button.interface';
import React, { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function LeftButton({ moveTo }: PropsButton): React.JSX.Element {
  return (
    <div className="absolute hidden top-[calc(50%_-_26px)] left-0 z-10 lg:flex items-center justify-center min-h-[1.75rem] h-7 min-w-[1.75rem] w-7">
      <Button
        variant="rounded"
        onClick={() => {
          moveTo('left');
        }}
      >
        <IoIosArrowBack className="text-lg" />
      </Button>
    </div>
  );
}

function RightButton({ disabled, moveTo }: PropsButton): React.JSX.Element {
  return (
    <div className="absolute hidden top-[calc(50%_-_26px)] lg:flex right-0 z-10 items-center justify-center min-h-[1.75rem] h-7 min-w-[1.75rem] w-7">
      <Button
        variant="rounded"
        onClick={() => {
          moveTo('right');
        }}
      >
        <IoIosArrowForward className="text-lg" />
      </Button>
    </div>
  );
}

export default function Contacts(): React.JSX.Element {
  const contactsRef = useRef<HTMLDivElement>(null);
  const {
    onDragging,
    onDragStart,
    isDragging,
    disabledIconLeft,
    disabledIconRight,
    moveTo
  } = useDrag(contactsRef, 'x');

  return (
    <div className="flex relative">
      {!disabledIconLeft && (
        <LeftButton disabled={disabledIconLeft} moveTo={moveTo} />
      )}

      <div
        ref={contactsRef}
        className={clsx('flex overflow-x-hidden', {
          'scroll-auto': isDragging,
          'scroll-smooth': !isDragging
        })}
        onTouchMove={onDragging}
        onTouchStart={onDragStart}
      >
        <ul className="flex items-center gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <li key={item} className="flex">
              <div className="flex flex-col items-center">
                <Badge
                  color="success"
                  variant="dot"
                  horizontal="right"
                  vertical="bottom"
                >
                  <Avatar src="/static/image.png" size={68} />
                </Badge>
                <span className="text-sm font-extralight mt-1.5">
                  Alejandro
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {!disabledIconRight && (
        <RightButton disabled={disabledIconRight} moveTo={moveTo} />
      )}
    </div>
  );
}
