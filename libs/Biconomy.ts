//@ts-no=check
import Biconomy from '@biconomy/web3-auth';
import { ethers } from 'ethers';

export const biconomy = new Biconomy(window.ethereum as ExternalProvider, {
    apiKey: config.apiKey.prod,
    debug: true,
    contractAddresses: ['0x150FC8208cb728d0b080388441bdB750d752542A'],

});


export type ExternalProvider = {
    isMetaMask?: boolean;
    isStatus?: boolean;
    host?: string;
    path?: string;
    sendAsync?: (request: { method: string, params?: Array<any> }, callback: (error: any, response: any) => void) => void
    send?: (request: { method: string, params?: Array<any> }, callback: (error: any, response: any) => void) => void
    request?: (request: { method: string, params?: Array<any> }) => Promise<any>
}

// To create contract instances you can do:
const contractInstance = new ethers.Contract(
    config.contract.address,
    config.contract.abi,
    biconomy.ethersProvider
);
