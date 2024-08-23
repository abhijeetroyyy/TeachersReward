import { useWeb3ModalProvider } from "@web3modal/ethers5/react";
import { Contract, providers } from "ethers";

// Define the contract ABI and address
const TeachersRewardABI = [
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
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "teacher",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokens",
                "type": "uint256"
            }
        ],
        "name": "TokensRewarded",
        "type": "event"
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
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "tokenBalance",
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

// Replace with your contract address
const CONTRACT_ADDRESS = "0xeDC61c5AEC100d3870d4a729Bf48e2B06c9057A5";

export async function getContract() {
    try {
        // Get the provider from Web3Modal
        const { walletProvider } = await useWeb3ModalProvider();
        
        if (!walletProvider) {
            throw new Error("No wallet provider found. Make sure Web3Modal is properly configured.");
        }
        
        // Create an Ethers.js provider from the wallet provider
        const provider = new providers.Web3Provider(walletProvider);
        
        // Ensure the provider is connected
        await provider.ready; // Ensure provider is ready
        
        // Create a new instance of the contract
        const contract = new Contract(CONTRACT_ADDRESS, TeachersRewardABI, provider.getSigner());
        
        return contract;
    } catch (error) {
        console.error("Error in getContract:", error.message);
        throw error; // Rethrow the error after logging it
    }
}
