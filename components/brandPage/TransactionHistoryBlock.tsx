const TransactionHistoryBlock = (props) => {
    return (
        <div className="flex flex-col my-23 bg-slate-200 w-full rounded ">
            <div className='flex flex-row'>
                <h2 className='font-[600]'>At :</h2>
                <h2>{props.at}</h2>
            </div>
            <div className='flex flex-row'>
                <h2 className='font-[600]'>To :</h2>
                <h2>{props.to}</h2>
            </div>
            <div className='flex flex-row'>
                <h2 className='font-[600]'>Height :</h2>
                <h2>{props.height}</h2>
            </div>
        </div>
    );
}

export default TransactionHistoryBlock;