import './App.css'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';

import { RequestAirdrop } from './components/RequestAirdrop';
import { ShowBalance } from './components/ShowBalance';
import { SendTokens } from './components/SendTokens';
import { SignMessage } from './components/SignMessage';

function App() {
  return (
    <ConnectionProvider endpoint='https://api.devnet.solana.com'>
      <WalletProvider wallets={[]}>
        <WalletModalProvider>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            paddingTop: 30,
            marginBottom: 20
          }}>
            <WalletDisconnectButton></WalletDisconnectButton>
            <WalletMultiButton></WalletMultiButton>
          </div>

          <div style={{margin: 40}}>
            <ShowBalance />
          </div>

          <div>
            <RequestAirdrop />
          </div>

          <div>
            <SendTokens />
          </div>

          <div>
            <SignMessage />
          </div>

        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
