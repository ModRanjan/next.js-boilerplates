import React from 'react';
import { Icon } from '../Icon';
import Link from 'next/link';

export const MenuItem = ({ icon, name, active, url }) => {
  return (
    <Link href={url}>
      <li
        className={`flex items-center justify-center cursor-pointer gap-3 text-lg p-2 my-3 transition-all duration-150 ease-in hover:bg-gray-200`}
      >
        <Icon icon={icon} />
        <span className={`${active && 'text-blue-800'} `}>{name}</span>
      </li>
    </Link>
  );
};
