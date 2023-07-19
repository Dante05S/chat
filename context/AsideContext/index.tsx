/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

export interface AsideState {
  show: boolean;
  toggle: () => void;
  position: 'left' | 'right';
  padding: boolean;
  full: boolean;
  header: boolean;
}

export const initState: AsideState = {
  show: false,
  toggle: () => {},
  position: 'left',
  padding: true,
  full: false,
  header: true
};
export const AsideContext = createContext<AsideState>(initState);
