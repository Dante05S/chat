import React, { useState } from 'react';
import Header from './Header';
import Contact from './Contact';

export default function AddContact(): React.JSX.Element {
  const [tab, setTab] = useState<string>('add');

  const handlehangeTab = (value: string): void => {
    setTab(value);
  };

  return (
    <div className="flex flex-col h-full">
      <Header tab={tab} onChangeTab={handlehangeTab} />
      <div className="flex flex-col h-full scroll px-3 py-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((element) => (
          <Contact key={element} type={tab} />
        ))}
      </div>
    </div>
  );
}
