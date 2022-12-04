import { Modal,Loader } from '@mantine/core';
import { useEffect, useState } from 'react';
import TransactionHistoryBlock from './TransactionHistoryBlock';
function TransactionModal(props) {
    // var data;
    const [loading, setLoading] = useState(false);
    const [txnData, setTxnData] = useState();
    useEffect(() => {
    {props.txnHash? fetchData():null};
        // setLoading(false);
    }, [])
        const fetchData = async () => {
        setLoading(true)
      const response=await fetch(
        `https://api.covalenthq.com/v1/${props.chainId}/transaction_v2/`+props.txnHash+`/?key=${process.env.COVALENTHQ_API_KEY}`
        );
        let data = await response.json()
        console.log('Data is',data.data.items[0]);
        setTxnData(data.data.items[0])
        setLoading(false)
    }
  return (
    <Modal
    opened={props.opened}
    onClose={() => props.setOpened(false)} 
    withCloseButton={false}
    size='40%'>
        <div className='text-center'>
        <h2 className='font-[650] text-3xl border-b-2 my-1 py-2 border-grey-100'>Transaction History</h2>
        </div>
    {(!txnData)? <div className='flex w-full justify-center'><Loader className='my-10'/></div>: 
    <div> 
        <TransactionHistoryBlock to={txnData['to_address']} at={txnData['block_signed_at']} height={txnData['block_height']} fees={txnData['fees_paid']
} />
    </div>}
    </Modal>
  );
}
export default TransactionModal