import { getProvider } from "./utils/provider";

const provider = getProvider();

/**
 * Get batch status from zks_getL1BatchDetails
 * More info in https://sdk.zksync.io/js/ethers/api/v6/providers/provider#getl1batchdetails
 */
export const getBatchStatus = async (batchNumber: number) => {
  const status = await provider.getL1BatchDetails(batchNumber);
  console.log(`Batch ${batchNumber} details: `, status);
};
