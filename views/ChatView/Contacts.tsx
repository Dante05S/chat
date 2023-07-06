import Avatar from 'components/Display/Avatar';
import Badge from 'components/Display/Badge';
import React from 'react';

export default function Contacts(): JSX.Element {
  return (
    <ul className="flex items-center gap-5">
      {[1, 2, 3].map((item) => (
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
  );
}
