import { Modal,Loader } from '@mantine/core';
import { useEffect, useState } from 'react';
import TransactionHistoryBlock from './TransactionHistoryBlock';
function TransactionModal(props) {
    const [loading, setLoading] = useState(false);
    const [txnData, setTxnData] = useState("");
    useEffect(() => {
    {props.txnHash? fetchData():setTxnData("Transaction Hash cant be Empty")};
    // setLoading(false);
    }, [])
        const fetchData = async () => {
        setLoading(true)
        console.log(loading)
      const response=await fetch(
        // `https://api.covalenthq.com/v1/${props.chainId}/transaction_v2/{${props.txnHash}}/?key=$`
        `https://api.covalenthq.com/v1/${props.chainId}/transaction_v2/`+props.txnHash+`/?key=${process.env.COVALENTHQ_API_KEY}`
        );
        const data = response.json()
        console.log('Data is',data);
        setLoading(false)
    }
  return (
    <Modal
    opened={props.opened}
    onClose={() => props.setOpened(false)} 
    withCloseButton={false}
    size='50%'>
        <div className='text-center'>
        <h2 className='font-[650] text-3xl border-b-2 my-1 py-2 border-grey-100'>Transaction History</h2>
        </div>
    {loading? <div className='flex w-full justify-center'><Loader className='my-10'/></div>: 
    <div> 
        <TransactionHistoryBlock to='0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb4' at='2022-12-03T18:47:12Z' height='16106165' />
        <TransactionHistoryBlock to='0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb4' at='2022-12-03T18:47:12Z' height='16106165' />
    </div>}
    </Modal>
  );
}
export default TransactionModal