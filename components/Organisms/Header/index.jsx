import { useState, useEffect, useRef, memo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import OutsideClickHandler from 'react-outside-click-handler';

import { Dropdown as DropdownMemo } from '../../Atom/Dropdown';
import { Menu as MenuMemo } from '../../Atom/Menu';
import { MenuBar } from '../../Molecules/MenuBar';
import { default as LogoMemo } from '../../Molecules/Logo';
import { NetworksDropdown } from '../../Molecules/NetworkDropdown';
import { UserAccount as UserAccountMemo } from '../../Organisms/UserAccount';

import { setChainData } from '../../../redux/action';
import { chainList } from '../../../config/chainList';
import { getCurrentChainId } from '../../../utils/network/getCurrentChainId';
import { changeNetwork } from '../../../utils/network/changeNetwork';

const Logo = memo(LogoMemo);
const Dropdown = memo(DropdownMemo);
const Menu = memo(MenuMemo);
const UserAccount = memo(UserAccountMemo);
const NetworksDropdownMemozied = memo(NetworksDropdown);

const Header = () => {
  const chainData = useSelector((state) => state.ChainDataReducer);
  const dispatch = useDispatch();
  const [openChaiList, setOpenChaiList] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    fetchCurrentChainData();
    ethereum.on('chainChanged', (chainId) => {
      fetchCurrentChainData();
    });
  }, []);

  const handleChainList = useCallback(() => {
    setOpenChaiList(!openChaiList);
  }, [openChaiList]);

  const handleOnClickOutside = (e) => {
    let isOutsideClickable = true;
    for (let i = 0; i < 3; i++) {
      if (e.path[i] == dropdownRef.current) {
        isOutsideClickable = false;
        break;
      }
    }
    if (isOutsideClickable) {
      setOpenChaiList(false);
    }
  };

  const fetchCurrentChainData = async () => {
    const chainId = await getCurrentChainId();
    if (chainId) {
      const currentChain = chainList.filter(function (val) {
        return val.chainId == chainId;
      });
      if (currentChain.length != 0) {
        dispatch(setChainData(currentChain[0]));
      } else {
        toast.error(
          'Connected to unsupported Network, Change your network in metamask',
        );
        await changeNetwork(chainData);
      }
    }
  };

  return (
    <>
      <div className="bg-white sticky top-0">
        <div className="container mx-auto flex justify-between items-center px-2 py-1">
          <div className="ml-2">
            <Logo url="/" className="h-8 md:h-11 cursor-pointer" />
          </div>
          <div className="flex space-x-2 md:space-x-5">
            <Dropdown
              imgSrc={chainData.logoUrl}
              name={chainData.name}
              dropdownRef={dropdownRef}
              dropdownOnClick={handleChainList}
            />
            <UserAccount />
            <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
          </div>
        </div>
      </div>
      {openMenu && (
        <OutsideClickHandler onOutsideClick={() => setOpenMenu(false)}>
          <div
            className="md:hidden fixed z-20 bg-white w-full duration-500"
            onClick={() => setOpenMenu(false)}
          >
            <MenuBar />
          </div>
        </OutsideClickHandler>
      )}
      {openChaiList && (
        <OutsideClickHandler onOutsideClick={handleOnClickOutside}>
          <NetworksDropdownMemozied handleChainListClose={handleChainList} />
        </OutsideClickHandler>
      )}
    </>
  );
};

export default Header;
