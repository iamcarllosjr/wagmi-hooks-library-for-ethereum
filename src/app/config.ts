import { createConfig, http } from 'wagmi';
import { optimismSepolia } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

// Get projectId at https://cloud.walletconnect.com
export const projectId = "d6b16adc56b769d2f95aab86a21a2ae3";

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Create wagmiConfig
export const config = createConfig({
    chains: [optimismSepolia],
    connectors: [injected()],
    ssr: true,
    transports: {
      [optimismSepolia.id]: http('https://sepolia.optimism.io')
    },
  })