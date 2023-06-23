// React
import React, { useState } from 'react';

// Components
import Avatar from 'components/Display/Avatar';
import ClickAwayListener from 'components/ClickAwayListener';
import Tooltip from 'components/Display/Tooltip';
import Card from 'components/Surfaces/Card';
import navItemsUser from 'utils/navItemsUser';

function ContentTooltip(): JSX.Element {
  return (
    <Card spacing="p-3">
      <div className="w-44">
        <ul className="flex flex-col gap-4">
          {navItemsUser.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.key} className="group cursor-pointer leading-none">
                <button className="w-full h-full">
                  <div className="flex items-center">
                    <div className="mr-2.5">
                      <Icon className="text-primary text-xl" />
                    </div>
                    <span className="text-sm group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </Card>
  );
}

export default function User(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ClickAwayListener
      onClickAway={() => {
        setOpen(false);
      }}
    >
      <Tooltip
        title={<ContentTooltip />}
        placement="bottom-start"
        open={open}
        disableHoverListener
      >
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          <div className="flex items-center">
            <Avatar size={40}>A</Avatar>
            <div className="flex flex-col ml-2.5">
              <p className="text-base">¡Bienvenido!, Alejandro</p>
              <p className="text-sm text-primary text-left">+57 321 8403738</p>
            </div>
          </div>
        </button>
      </Tooltip>
    </ClickAwayListener>
  );
}
