"use client"
import { config } from '../config';
import { getAccount } from '@wagmi/core';
import { injected } from 'wagmi/connectors';
import { useConnect, useDisconnect } from 'wagmi'

import ContractInteraction from './ContractInteraction';

const contractAddress = "0x58fda51449837ac04f9543329e1edfb66326ccbd";

const ConnectWallet = () => {
    const {address, isConnected} = getAccount(config);
    const { connect } = useConnect()
    const { disconnect } = useDisconnect()

    return (
        <div className='flex flex-col gap-3 items-center p-3'>
        
           {isConnected ? (
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-6'>
                 <p>{address}</p> 
                 <button onClick={() => disconnect()}>Disconnect Wallet</button>
              </div>
              <ContractInteraction />
            </div>
             
           ) : (
            <div>
              <button onClick={() => connect({ connector: injected() })}>Connect Wallet</button> 
              <h1>Welcome</h1>
            </div>
           )
           } 
        </div>
    )
}

export default ConnectWallet;