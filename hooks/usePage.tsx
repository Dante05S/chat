import { useContext } from 'react';
import { PageContext, type PageState } from 'context/PageContext';

export default function usePage(): PageState {
  return useContext(PageContext);
}
