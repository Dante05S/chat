// Next
import dynamic from 'next/dynamic';

// React
import React, { useState } from 'react';

// Icons
import { MdClose } from 'react-icons/md';

// Components
import Avatar from 'components/Display/Avatar';
import ClickAwayListener from 'components/ClickAwayListener';
import Tooltip from 'components/Display/Tooltip';
import Card from 'components/Surfaces/Card';
import navItemsUser from 'utils/navItemsUser';
import useModal from 'hooks/useModal';
import Loading from 'components/Loaders/Loading';
import IconButton from 'components/Buttons/IconButton';

const Aside = dynamic(async () => await import('components/Navigation/Aside'), {
  ssr: false
});
const AsideUser = dynamic(
  async () => await import('components/AsideViews/AsideUser'),
  {
    ssr: false,
    loading: () => <Loading />
  }
);

function ContentTooltip(): React.JSX.Element {
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

export default function User(): React.JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [openAside, toggleAside] = useModal();

  return (
    <>
      <div className="md:hidden">
        <button
          onClick={() => {
            toggleAside();
          }}
        >
          <Avatar size={40}>A</Avatar>
        </button>
      </div>
      <div className="hidden md:block">
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
                  <p className="text-sm text-primary text-left">
                    +57 321 8403738
                  </p>
                </div>
              </div>
            </button>
          </Tooltip>
        </ClickAwayListener>
      </div>
      <Aside
        show={openAside}
        toggle={toggleAside}
        position="right"
        header={false}
      >
        <div className="w-full flex py-2">
          <IconButton
            onClick={() => {
              toggleAside();
            }}
          >
            <MdClose />
          </IconButton>
        </div>
        <div className="flex w-full h-[calc(100%_-_52px)] justify-center items-center">
          <AsideUser />
        </div>
      </Aside>
    </>
  );
}
