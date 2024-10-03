import { getProvider } from "../utils/provider";

const TRANSACTION_HASH = '0x46af16c12e5e4f96b348ded5f9d8d05947a4a7afad8cba8dcd72ffa43999f705';
const BATCH_NUMBER = 492761;
const BLOCK_NUMBER = 45724237;

const provider = getProvider();

/**
 * Get transaction status from zks_getTransactionDetails
 * More info in https://sdk.zksync.io/js/ethers/api/v6/providers/provider#gettransactiondetails
 */
export const getTransactionStatus = async () => {
  const status = await provider.getTransactionStatus(TRANSACTION_HASH);
  console.log(`Transaction ${TRANSACTION_HASH} status:`, status);
};

/**
 * Get block status from zks_getBlockDetails
 * More info in https://sdk.zksync.io/js/ethers/api/v6/providers/provider#getblockdetails
 */
export const getBlockStatus = async () => {
  const status = await provider.getBlockDetails(BLOCK_NUMBER);
  console.log(`Block ${BLOCK_NUMBER} details: `, status);
};

/**
 * Get batch status from zks_getL1BatchDetails
 * More info in https://sdk.zksync.io/js/ethers/api/v6/providers/provider#getl1batchdetails
 */
export const getBatchStatus = async () => {
  const status = await provider.getL1BatchDetails(BATCH_NUMBER);
  console.log(`Batch ${BATCH_NUMBER} details: `, status);
};
