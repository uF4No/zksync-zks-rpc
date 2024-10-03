import { getProvider } from "./utils/provider";

const provider = getProvider();

/**
 * Get block status from zks_getBlockDetails
 * More info in https://sdk.zksync.io/js/ethers/api/v6/providers/provider#getblockdetails
 */
export const getBlockStatus = async (blockNumber: number) => {
  const status = await provider.getBlockDetails(blockNumber);
  console.log(`Block ${blockNumber} details: `, status);
};
