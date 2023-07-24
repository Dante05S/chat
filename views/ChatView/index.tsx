// React
import React, { useEffect, useState } from 'react';

// Components
import PageLayout from 'layouts/PageLayout';

// Icons
import { useMediaQuery } from 'usehooks-ts';
import MobileView from './MobileView';
import DesktopView from './DesktopView';

export default function ChatView(): React.JSX.Element {
  const matches = useMediaQuery('(min-width: 1024px)');
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    setIsDesktop(matches);
  }, [matches]);

  return (
    <PageLayout>{!isDesktop ? <MobileView /> : <DesktopView />}</PageLayout>
  );
}
