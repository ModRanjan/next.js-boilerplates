import React from 'react';

export const Input = ({
  label,
  type,
  id,
  placeholder,
  onChange,
  error,
  errorMsg,
  ref,
  name,
}) => {
  const className = [
    'align-middle',
    'bg-transparent',
    'border border-slate-200',
    error && 'border-red-500 outline-red-500',
    'inline-block',
    'outline-none focus:outline-none',
    'px-2 py-0.5',
    'text-lg',
    'text-inherit',
    'w-full',
  ].join(' ');

  return (
    <div className="w-full box-border   ">
      {label ? (
        <label className="block font-bold text-gray-700 mb-1" htmlFor={name}>
          {label}
        </label>
      ) : null}

      <input
        type={type}
        id={id}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        ref={ref}
      />
      {error && <h1 className="inline text-xs text-red-500">{errorMsg}</h1>}
    </div>
  );
};
