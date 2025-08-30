# Token Launchpad

This is a starter project for building a token launchpad on the Solana blockchain using React, Vite, and the Solana Wallet Adapter. It provides basic functionalities for interacting with Solana, including wallet connection, airdrop requests, balance checking, token sending, and message signing.

## Features

- Wallet connection using Solana Wallet Adapter
- Request SOL airdrop on Devnet
- Display account balance
- Send SOL to other addresses
- Sign messages with the connected wallet

## Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn
- A Solana wallet (e.g., Phantom) for testing on Devnet

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-repo/token-launchpad.git
   cd token-launchpad
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Running the Application

Start the development server:
```
npm run dev
```

The app will be available at `http://localhost:5173/`.

## Building for Production

To build the app for production:
```
npm run build
```

## Linting

To lint the code:
```
npm run lint
```

## Dependencies

Key dependencies include:
- `@solana/web3.js` for Solana interactions
- `@solana/wallet-adapter-react` and related packages for wallet integration
- React and React DOM for the frontend

## Project Structure

- `src/components/`: Contains React components for each feature (RequestAirdrop, ShowBalance, SendTokens, SignMessage)
- `src/App.jsx`: Main application component that integrates all features
- `src/main.jsx`: Entry point for the React app

This project connects to the Solana Devnet by default. For production use, update the endpoint in `App.jsx`.

For more information on Solana development, visit the [Solana Documentation](https://docs.solana.com/).
