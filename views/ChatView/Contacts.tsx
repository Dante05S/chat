import clsx from 'clsx';
import Avatar from 'components/Display/Avatar';
import Badge from 'components/Display/Badge';
import useDrag from 'hooks/useDrag';
import React, { useRef } from 'react';

export default function Contacts(): JSX.Element {
  const contactsRef = useRef<HTMLDivElement>(null);
  const { onDragging, onDragStart, isDragging } = useDrag(contactsRef, 'x');

  return (
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
              <span className="text-sm font-extralight mt-1.5">Alejandro</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
