import React from 'react';
import { Label } from '../../Atom/Label';
import { Input } from '../../Atom/Input';
import { Button } from '../../Atom/Button';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ethers } from 'ethers';
import { contractAddress } from '../../../constant';
import Web3Boilerplate from '../../../artifacts/contracts/abis/Web3Boilerplate.json';
const Hero = () => {
  const walletData = useSelector((state) => state).WalletDataReducer;
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [name, setName] = useState('');
  const handleOnChange = () => {
    let entereName = document.getElementById('name').value;
    if (entereName == '') {
      setInputError(true);
      toast.error("name can't be empty");
    } else {
      setInputError(false);
    }
    setName(entereName);
  };
  const userRegistration = async () => {
    let provider;
    let signer;
    if (walletData.provider) {
      provider = walletData.provider;
      signer = walletData.signer;
    }
    const contract = new ethers.Contract(
      contractAddress,
      Web3Boilerplate.abi,
      signer,
    );

    if (name === '') {
      toast.error('Invalid Input');
      return 0;
    }
    try {
      setLoading(true);
      const transaction = await contract.userRegistration(name);
      console.log(transaction);
      toast.success(
        'Transaction is placed, wait till it gets confirmed on blockchain',
      );
      const tx = await transaction.wait();
      toast.success('user Registered  Successfull');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.code === 4001) {
        toast.error('User denied transaction signature');
      } else {
        toast.error(error.reason);
      }
    }
  };
  return (
    <div className="w-full md:w-2/5 bg-white  mx-auto my-10 shadow-sm shadow-blue-300">
      <Label className="p-3 font-bold text-2xl">Web3</Label>
      <hr />
      <div className="p-5 space-y-5">
        <Label className="text-center text-xl font-semibold">
          User Registration
        </Label>
        <Input
          label="Enter Name :"
          type="text"
          id="name"
          placeholder="enter your name"
          onChange={handleOnChange}
          error={inputError}
          errorMsg=" Name Can't be empty"
        />
        <Button loading={loading} onClick={userRegistration}>
          Register
        </Button>
      </div>
    </div>
  );
};

export default Hero;
