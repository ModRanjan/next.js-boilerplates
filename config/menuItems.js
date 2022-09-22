import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import { ImDatabase } from 'react-icons/im';

const menuItemData = [
  {
    name: 'Home',
    icon: AiFillHome,
    url: '/',
  },
  {
    name: 'All Users',
    icon: ImDatabase,
    url: '/users',
  },

  {
    name: 'Docs',
    icon: AiFillInfoCircle,
    url: 'https://web3js.readthedocs.io/en/v1.7.5/',
  },
];

export default menuItemData;
