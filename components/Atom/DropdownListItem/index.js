import React from 'react';
import { Image } from '../Image';

export const DropdownListItem = ({ onClickDropdownItem, imgSrc, name }) => {
  const className = [
    'flex items-center gap-3',
    'px-3',
    'h-11 w-full',
    'rounded-sm',
    'border-t border-indigo-200',
    'text-inherit text-gray-900',
    'hover:bg-gray-200',
    'cursor-pointer',
    'transition-all duration-150 ease-in',
  ].join(' ');

  return (
    <div onClick={onClickDropdownItem} className={className}>
      <Image src={imgSrc} alt={'$'} className={'w-5 h-5'} />

      <span className="font-medium">{name}</span>
    </div>
  );
};
