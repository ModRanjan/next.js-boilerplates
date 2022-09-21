import React from 'react';
import { DropdownListItem } from '../../Atom/DropdownListItem';
import { changeNetwork } from '../../../utils/network/changeNetwork';
import { chainList } from '../../../config/chainList';
export const NetworksDropdown = ({ handleChainListClose }) => {
  return (
    <div className="  right-0 md:right-20 p-2 flex items-center justify-center w-full md:w-80 z-20 fixed  bg-white  rounded-lg">
      <ul className="flex flex-col grow w-full gap-y-2">
        <li className="text-gray-500 pb-2">Select a network</li>
        {chainList.map((data, index) => {
          return (
            <li key={index}>
              <DropdownListItem
                imgSrc={data.logoUrl}
                name={data.name}
                onClickDropdownItem={() => {
                  changeNetwork(data);
                  handleChainListClose();
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
