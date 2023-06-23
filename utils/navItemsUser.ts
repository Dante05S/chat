import { type IconType } from 'react-icons';
import { FaUserAlt } from 'react-icons/fa';
import { ImExit } from 'react-icons/im';

export interface NavItems {
  key: number;
  icon: IconType;
  title: string;
  href: string;
}

const navItemsUser: NavItems[] = [
  {
    key: 1,
    icon: FaUserAlt,
    title: 'Ver perfil',
    href: '/account'
  },
  {
    key: 2,
    icon: ImExit,
    title: 'Cerrar sesión',
    href: ''
  }
];

export default navItemsUser;
