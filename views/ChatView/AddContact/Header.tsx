import Tabs from 'components/Tabs';
import Tab from 'components/Tabs/Tab';
import React from 'react';

interface Props {
  tab: string;
  onChangeTab: (value: string) => void;
}

export default function Header({ tab, onChangeTab }: Props): React.JSX.Element {
  return (
    <div className="flex flex-col w-full">
      <Tabs value={tab} onChange={onChangeTab}>
        <Tab label="Agregar" value="add" />
        <Tab label="Solicitudes" value="request" />
        <Tab label="Pendientes" value="pending" />
      </Tabs>
    </div>
  );
}
