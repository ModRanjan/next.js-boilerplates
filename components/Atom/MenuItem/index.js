import React from 'react';
import { Image } from '../Image';
import Link from 'next/link';
export const MenuItem = ({ logoSrc, label, active, url }) => {
  return (
    <Link href={url}>
      <li
        className={`flex items-center justify-center cursor-pointer gap-3 text-lg p-2 my-3 transition-all duration-150 ease-in hover:bg-gray-200`}
      >
        <Image className="h-5 w-5" src={logoSrc} alt={''} />
        <span className={`${active ? 'text-blue-800' : null}`}>{label}</span>
      </li>
    </Link>
  );
};
