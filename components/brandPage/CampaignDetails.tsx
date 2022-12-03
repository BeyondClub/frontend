import LensVerification from 'components/LensVerification';
import { useWeb3AuthContext } from 'context/SocialLoginContext';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const CampaignDetails = (props) => {
	const [txHash, setTxHash] = useState(null);
	const { connect, address } = useWeb3AuthContext();

	const [handleTicketModal, setHandleTicketModal] = React.useState(false);
	const openModal = () => {
		setHandleTicketModal(true);
		console.log(handleTicketModal);
	};

	const mintTheNFT = async () => {
		if (address) {
			const result = await fetch(
				`/api/service/mint_nft?name=${props.nft_name}&symbol=${props.nft_symbol}&wallet=${address}`,
				{
					method: 'GET',
					credentials: 'include',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
				}
			);

			const response = result.json();
			// @ts-ignore
			if (response?.tx_hash) setTxHash(response?.tx_hash);
		} else {
			toast.error('Connect wallet to mint NFT');
		}
	};

	return (
		<div className="flex flex-col basis-1/4  justify-items-start px-9">
			<h2 className="text-xl font-bold my-0.5">{props.title}</h2>
			<p className="text-m text-[#000]/[0.7] mb-1">{props.desc}</p>
			<h2 className="text-lg font-bold my-0.5">Duration</h2>
			<p className="text-m text-[#000]/[0.7] mb-1">{props.duration}</p>
			<h2 className="text-lg font-bold my-0.5">How Can I get it ?</h2>
			<p className="text-m text-[#000]/[0.7] mb-1">{props.howToGet}</p>
			<h2 className="text-lg font-bold my-0.5">What can I access if I have this collectible ?</h2>
			<p className="text-m text-[#000]/[0.7] mb-1">{props.whatToGet}</p>
			<div className="flex flex-row justify-between">
				<div className="flex flex-col  ">
					<h2 className="text-lg font-bold my-0.5">Claimable Period</h2>
					<p className="text-m text-[#000]/[0.7] mb-1">{props.claimablePeriod}</p>
				</div>
				<div className="flex flex-col">
					<h2 className="text-lg font-bold my-0.5">Redeemed</h2>
					<p className="text-m text-[#000]/[0.7] mb-1">
						{props.redeemed}/{props.total}
					</p>
				</div>
			</div>

			<LensVerification lensVerifyHandle={'jijin.lens'} lensHandle="yukiw.lens" />

			{txHash ? (
				<p>{txHash}</p>
			) : (
				<button className="bg-[#32734E] text-[#fff] p-2 rounded-2xl w-1/3 my-3" onClick={mintTheNFT}>
					Redeem Now
				</button>
			)}

			{/* <Notification/> */}
			{/* <button className='bg-[#32734E] text-[#fff] p-2 rounded-2xl w-1/3 my-3' onClick={openModal}>Redeem Now</button> */}
			{/* <Modal opened={handleTicketModal}
             onClose={() => setHandleTicketModal(false)}>
      Modal without header, press escape or click on overlay to close
    </Modal> */}
			{/* <TicketModal handleTicketModal={handleTicketModal} setHandleTicketModal={setHandleTicketModal}/> */}
		</div>
	);
};

export default CampaignDetails;
