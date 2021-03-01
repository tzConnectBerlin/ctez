import { NetworkType } from '../interfaces';

export const APP_NAME = process.env.REACT_APP_APP_NAME || 'CTez';
export const NETWORK = (process.env.REACT_APP_NETWORK_TYPE || 'edonet') as NetworkType;
export const CFMM_ADDRESS = process.env.REACT_APP_CFMM_CONTRACT;
export const CTEZ_ADDRESS = process.env.REACT_APP_CTEZ_CONTRACT;
export const RPC_URL = process.env.REACT_APP_RPC_URL || 'https://edonet.smartpy.com';
export const RPC_PORT = process.env.REACT_APP_RPC_PORT || 443;