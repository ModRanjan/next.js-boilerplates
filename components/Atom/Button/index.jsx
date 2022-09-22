import React from 'react';
import { Spinner } from '../Spinner';

export const Button = ({
  color,
  bgColor,
  rounded,
  blocked,
  onClick,
  children,
  loading,
  disabled,
  customClassName,
}) => {
  const className = [
    'flex items-center justify-center',
    'mx-auto',
    'px-4 py-1.5 md:px-6 md:py-2',
    'outline-none',
    'focus:outline-none focus:ring-0',
    'border-2 border-indigo-300',
    'text-inherit leading-tight',
    'transition duration-150 ease-in-out',
    color ? `text-${color}` : 'text-gray-800 ',
    bgColor ? `bg-${bgColor}` : 'bg-white ',
    'hover:border-opacity-60',
    'hover:bg-opacity-5',
    rounded ? `rounded-2xl` : 'rounded-lg',
    blocked && 'w-full block',
    loading ? 'disabled cursor-not-allowed' : 'cursor-pointer',
  ].join(' ');

  return (
    <button
      className={customClassName || className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}

      {loading && <Spinner />}
    </button>
  );
};
