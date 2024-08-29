
# TeachersReward

![TeachersReward](https://github.com/user-attachments/assets/3edebe3f-5516-46b3-8ded-15d4e4a4765d)

## Overview

**TeachersReward** is a blockchain-based platform designed to reward educators with tokens based on their contributions. By leveraging the power of blockchain technology, this system ensures transparency, security, and immutability in the issuance and management of rewards. The project includes a smart contract for token management and a web-based user interface for interacting with the contract.

## Features

- **Token Management**: 
  - Issue, verify, and manage rewards using smart contracts on the Ethereum blockchain.
  - Immutable record of all transactions, ensuring transparency.
  
- **User Interface**:
  - Web interface built with Next.js and Tailwind CSS.
  - Teachers can check their token balances, view transaction history, and interact with the reward system.
  
- **Security & Transparency**:
  - Utilizes Ethereum blockchain for secure and transparent transactions.
  - Smart contracts written in Solidity to manage the lifecycle of tokens.

## Technologies Used

- ![Solidity](https://img.shields.io/badge/Solidity-363636?style=for-the-badge&logo=solidity&logoColor=white)
- ![Ethereum](https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=ethereum&logoColor=white)
- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## App Compatibility and Efficiency

- **Compatibility**:
  - The application is compatible with all modern browsers, including Chrome, Firefox, Safari, and Edge.
  - Responsive design ensures usability on desktops, tablets, and mobile devices.
  - Ethereum-compatible wallets like MetaMask are required for interacting with the smart contract.

- **Efficiency**:
  - Smart contract optimizations reduce gas costs.
  - Lightweight front-end ensures fast load times and smooth user experience.
  - Secure, reliable, and scalable to handle a growing number of users and transactions.

## Installation

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (version 14.x or later)
- **npm** (version 6.x or later)
- **Ethereum wallet** (e.g., MetaMask)
- **Truffle** or **Hardhat** (for deploying smart contracts)
- **Ganache** (optional, for local Ethereum blockchain development)

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/abhijeetroyyy/TeachersReward.git
   cd TeachersReward
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Deploy the Smart Contract**

   Follow these steps to deploy the smart contract to the Ethereum network:

   - Configure the deployment network in the `truffle-config.js` or `hardhat.config.js` file.
   - Deploy the smart contract using Truffle or Hardhat:

   ```bash
   truffle migrate --network <network_name>
   # OR
   npx hardhat run scripts/deploy.js --network <network_name>
   ```

   Make sure to replace `<network_name>` with your desired Ethereum network (e.g., `ropsten`, `mainnet`).

4. **Configure Environment Variables**

   Create a `.env` file in the root of your project and add your environment variables:

   ```env
   NEXT_PUBLIC_INFURA_API_KEY=<Your_Infura_API_Key>
   NEXT_PUBLIC_CONTRACT_ADDRESS=<Deployed_Contract_Address>
   ```

   These values will be used to connect your application to the Ethereum network and interact with the deployed smart contract.

5. **Run the Application**

   Start the development server for the Next.js application:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Usage

### Access the Application

- Open your browser and navigate to `http://localhost:3000` (or the production URL if deployed).
- Ensure your Ethereum wallet (e.g., MetaMask) is connected to the correct network.

### Interact with the Smart Contract

- **Issue Rewards**: Use the admin interface to issue tokens to teachers based on their contributions.
- **Verify Rewards**: Teachers can log in, check their balances, and view transaction history.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

Please ensure your code adheres to the project's coding standards and passes all tests before submitting.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or feedback, please contact [Abhijeet Roy](mailto:abhijeetroy@example.com).
