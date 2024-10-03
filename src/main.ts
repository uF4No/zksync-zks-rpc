import { getTransactionStatus } from './zks_transaction'; 
import { getBlockStatus } from './zks_block'; 
import {getBatchStatus } from './zks_batch'; 


const txHash = "0x9c13132488634b4c0204049480d393d3d6604af705007ad022013009324fb5be"

const blockNumber = 45727799
const batchNumber = 492733

const runAllMethods = async () => {
  await getTransactionStatus(txHash);
  await getBlockStatus(blockNumber);
  await getBatchStatus(batchNumber);
};

runAllMethods()
  .then(() => console.log("All methods executed successfully"))
  .catch((error) => console.error("Error executing methods:", error));
