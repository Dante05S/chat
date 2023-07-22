import TabsContext, { type TabsState } from 'context/TabsContext';
import { useContext } from 'react';

export default function useTabs(): TabsState {
  return useContext(TabsContext);
}
