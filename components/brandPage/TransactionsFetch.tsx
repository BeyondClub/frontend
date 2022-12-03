import { Modal,Loader } from '@mantine/core';
import { useEffect, useState } from 'react';
function TransactionModal(props) {
    const [loading, setLoading] = useState(false);
    const [txnData, setTxnData] = useState();
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
    {loading? <div className='flex w-full justify-center'><Loader className='my-10'/></div>: <div> {txnData}</div>}
    </Modal>
  );
}
export default TransactionModal