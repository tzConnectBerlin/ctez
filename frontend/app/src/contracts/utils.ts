import { ContractAbstraction, Wallet, WalletContract } from '@taquito/taquito';
import { getTezosInstance } from './client';

export const executeMethod = async (
  contract: WalletContract,
  methodName: string,
  args: unknown[] = [['Unit']],
  confirmation = 0,
): Promise<string> => {
  const op = await contract.methods[methodName](...args).send();
  confirmation && (await op.confirmation(confirmation));
  return op.opHash;
};

export const initContract = async (
  address: string | null = null,
): Promise<ContractAbstraction<Wallet>> => {
  const tezos = getTezosInstance();
  if (!address || tezos === null) {
    throw new Error('contract address not set or Tezos not initialized');
  }
  const contract = await tezos.wallet.at(address);
  return contract;
};