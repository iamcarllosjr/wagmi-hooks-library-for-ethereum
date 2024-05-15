import React from 'react'
import { config } from '../config';
import abi from "./abi.json";
import { writeContract, readContract, getAccount} from '@wagmi/core';
import { useAccount } from 'wagmi';

const contractAddress = "0x58fda51449837ac04f9543329e1edfb66326ccbd";

const ContractInteraction = () => {
    const {address, isConnected, } = getAccount(config);
    const account = useAccount();
    
    async function createProduction() {
      if ( account.status === "disconnected" ) {
          console.error("Please connect your wallet.");
          return;
        }

        await writeContract(config, {
           abi,
           address: contractAddress,
           functionName: 'createProduction',
           args: [
             777,
             "xxx"
           ],
         })
   }

   async function getProductions() {
    if ( account.status === "disconnected" ) {
      console.error("Please connect your wallet.");
      return;
    }

    const result = await readContract(config, {
        abi,
        address: contractAddress,
        functionName: 'getProductionsByCompany',
        args: [address],
      })

      console.log(result);
}

  return (
    <div className='flex gap-6'>
        <button onClick={createProduction}>Create Production</button>
        <button onClick={getProductions}>Get Productions</button>
    </div>
  )
}

export default ContractInteraction;