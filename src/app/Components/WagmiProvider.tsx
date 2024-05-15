"use client";
import { config } from '../config';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Provider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <WagmiProvider config={config}> 
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
    </WagmiProvider>
  );
}
