import { createContext } from 'react';

export interface PageState {
  title: string;
  description: string;
}

export const initState: PageState = {
  title: '',
  description: ''
};
export const PageContext = createContext<PageState>(initState);
