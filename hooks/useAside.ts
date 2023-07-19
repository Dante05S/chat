import { AsideContext, type AsideState } from 'context/AsideContext';
import { useContext } from 'react';

export default function useAside(): AsideState {
  return useContext(AsideContext);
}
