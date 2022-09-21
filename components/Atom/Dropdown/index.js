import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Image } from '../Image';
import { Icon } from '../Icon';
export const Dropdown = ({
  name,
  dropdownOnClick,
  imgSrc,
  disabled,
  dropdownRef,
}) => {
  const className = [
    'flex items-center gap-2',
    'px-2 py-1',
    'border-2 border-indigo-300 bg-white',
    'relative',
    'font-sans font-medium',
    'rounded-xl',
    disabled ? 'disabled ' : '',
    'cursor-pointer',
  ].join(' ');

  return (
    <button
      ref={dropdownRef}
      className={className}
      disabled={disabled}
      onClick={dropdownOnClick}
    >
      <Image src={imgSrc} alt={'$'} className={'w-4 h-4'} />
      <span className="hidden sm:block ">{name}</span>
      <Icon icon={FiChevronDown} className="w-4 h-4" />
    </button>
  );
};
