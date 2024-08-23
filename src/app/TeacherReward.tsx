"use client";
import React, { useState } from 'react';
import { ethers } from 'ethers';

const TeacherRewards: React.FC = () => {
  const [teacherAddress, setTeacherAddress] = useState<string>('');
  const [tokenAmount, setTokenAmount] = useState<number>(0);
  const [balance, setBalance] = useState<string | null>(null); // Use string to handle large numbers
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastType, setToastType] = useState<'success' | 'error' | null>(null);

  // ABI of the TeacherRewards contract
  const teacherRewardsAbi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "teacher",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokens",
          "type": "uint256"
        }
      ],
      "name": "rewardTeacher",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "teacher",
          "type": "address"
        }
      ],
      "name": "getTokenBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

  // Address of the deployed TeacherRewards contract
  const contractAddress = "0xeDC61c5AEC100d3870d4a729Bf48e2B06c9057A5"; // Replace with your contract address

  // Function to handle rewarding tokens to a teacher
  const rewardTeacher = async () => {
    if (!teacherAddress || tokenAmount <= 0) {
      showToast("Invalid input data", "error");
      return;
    }

    if (!ethers.utils.isAddress(teacherAddress)) {
      showToast("Invalid teacher address", "error");
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, teacherRewardsAbi, signer);

      const tx = await contract.rewardTeacher(teacherAddress, ethers.utils.parseUnits(tokenAmount.toString(), 18));
      await tx.wait();

      showToast(`Rewarded ${tokenAmount} tokens to ${teacherAddress}`, "success");
    } catch (error) {
      console.error("Error rewarding tokens:", error);
      showToast("Failed to reward tokens", "error");
    }
  };

  // Function to check a teacher's token balance
  const checkBalance = async () => {
    if (!teacherAddress) {
      showToast("Please enter a valid teacher address", "error");
      return;
    }

    if (!ethers.utils.isAddress(teacherAddress)) {
      showToast("Invalid teacher address", "error");
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, teacherRewardsAbi, provider);

      const balanceBigNumber = await contract.getTokenBalance(teacherAddress);
      setBalance(ethers.utils.formatUnits(balanceBigNumber, 18)); // Assuming token has 18 decimals
    } catch (error) {
      console.error("Error fetching balance:", error);
      showToast("Failed to fetch balance", "error");
    }
  };

  // Function to show custom toast messages
  const showToast = (message: string, type: 'success' | 'error') => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => {
      setToastMessage(null);
      setToastType(null);
    }, 3000); // Toast will disappear after 3 seconds
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-2xl p-10 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
        <h1 className="text-4xl font-semibold text-center text-teal-500 mb-8">Teacher Rewards</h1>

        <div className="space-y-8">
          <div className="flex flex-col">
            <label htmlFor="teacher-address" className="text-teal-600">Teacher Address</label>
            <input
              id="teacher-address"
              placeholder="Enter Teacher Address"
              value={teacherAddress}
              onChange={(e) => setTeacherAddress(e.target.value)}
              className="mt-2 p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 text-white placeholder-gray-400 focus:ring-teal-400 focus:border-teal-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="token-amount" className="text-teal-600">Token Amount</label>
            <input
              id="token-amount"
              placeholder="Enter Token Amount"
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              value={tokenAmount}
              onChange={(e) => setTokenAmount(Number(e.target.value))}
              className="mt-2 p-3 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-700 text-white placeholder-gray-400 focus:ring-teal-400 focus:border-teal-400 appearance-none"
            />
          </div>

          <button
            onClick={rewardTeacher}
            className="w-full py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
          >
            Reward Teacher
          </button>

          <button
            onClick={checkBalance}
            className="w-full py-3 border border-teal-500 text-teal-500 rounded-md hover:bg-teal-50 transition duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
          >
            Check Balance
          </button>

          {balance !== null && (
            <div className="mt-6 p-4 border border-teal-300 rounded-md bg-teal-50">
              <p className="text-lg font-bold text-teal-600 text-center">
                Balance: {balance} tokens
              </p>
            </div>
          )}
        </div>

        {toastMessage && (
          <div
            className={`fixed bottom-4 right-4 p-4 rounded-md text-white ${toastType === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
          >
            {toastMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherRewards;
