import { getProvider } from "./utils/provider";

const provider = getProvider();

/**
 * Get transaction status from zks_getTransactionDetails
 * More info in https://sdk.zksync.io/js/ethers/api/v6/providers/provider#gettransactiondetails
 */
export const getTransactionStatus = async (txHash: string) => {
  const status = await provider.getTransactionStatus(txHash);
  console.log(`Transaction ${txHash} status:`, status);
};
