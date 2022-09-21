import { useDispatch } from 'react-redux';
import { Button } from '../../Atom/Button';

import { setWalletData } from '../../../redux/action';
import { getWalletData } from '../../../utils/web3';

export const ConnectWallet = ({ blocked }) => {
  const dispatch = useDispatch();

  const connectWallet = async () => {
    const data = await getWalletData();
    const walletData = {
      currentAccount: data.currentAccount,
      accountBalance: data.accountBalance,
      isConnected: data.isConnected && true,
    };
    window.sessionStorage.setItem('walletData', JSON.stringify(walletData));
    dispatch(setWalletData(data));
  };
  return (
    <Button
      onClick={connectWallet}
      blocked={blocked}
      hover="hover:border-[#B1B2FF]"
    >
      Connect Wallet
    </Button>
  );
};
