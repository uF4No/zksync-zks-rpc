import { getTransactionStatus, getBatchStatus, getBlockStatus } from './examples/zks_status'; // Adjust the path as necessary

const runAllMethods = async () => {
  await getTransactionStatus();
  await getBatchStatus();
  await getBlockStatus();
};

runAllMethods()
  .then(() => console.log("All methods executed successfully"))
  .catch((error) => console.error("Error executing methods:", error));
