import SmartAccount from '@biconomy/smart-account';
import { LivepeerConfig } from '@livepeer/react';
import { Anchor, Button, Input, NumberInput, SegmentedControl, TextInput } from '@mantine/core';
import { DateRangePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import ImageUpload from 'components/common/ImageUpload';
import Layout from 'components/layout';
import AccountLayout from 'components/layout/AccountLayout';
import { livePeerClient, livePeerTheme } from 'components/LivePeer/Player';
import VideoFileUpload from 'components/LivePeer/VideoFileUpload';
import { useWeb3AuthContext } from 'context/SocialLoginContext';
import dayjs from 'dayjs';
import { ethers } from 'ethers';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ChainId } from 'utils/chainConfig';
import { CONTRACT_ABI } from '../../constants';

const items = [
	{ title: 'Dashboard', href: '/dashboard' },
	{ title: 'New Campaign', href: '#' },
].map((item, index) => (
	<Anchor href={item.href} key={index}>
		{item.title}
	</Anchor>
));

export default function Register() {
	const router = useRouter();
	const [loading, setLoading] = useState(false);
	const { provider, address } = useWeb3AuthContext();

	const form = useForm({
		initialValues: {
			campaign_name: '',
			cover_image: '',
			collectible_image: '',
			collectible_name: '',
			collectible_symbol: '',
			campaign_type: 'lens_post',
			collectible_price: '',
			amount_of_collectibles: '',
			experience: 'collectable',
			target: 'everyone',
			duration: [new Date(dayjs().startOf('month').toDate()), new Date(dayjs().endOf('month').toDate())],
		},
	});

	const handleSubmission = async () => {
		setLoading(true);
		const walletProvider = new ethers.providers.Web3Provider(provider);
		console.log(walletProvider);

		//![BUG] move to config
		let options = {
			activeNetworkId: ChainId.POLYGON_MUMBAI,
			supportedNetworksIds: [ChainId.GOERLI, ChainId.POLYGON_MAINNET, ChainId.POLYGON_MUMBAI],
			networkConfig: [
				{
					chainId: ChainId.POLYGON_MUMBAI,
					dappAPIKey: '59fRCMXvk.8a1652f0-b522-4ea7-b296-98628499aee3',
				},
			],
		};
		let smartAccount = new SmartAccount(walletProvider, options);
		console.log(smartAccount);
		smartAccount = await smartAccount.init();
		// const clubContract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, walletProvider);
		const clubContract = new ethers.utils.Interface(CONTRACT_ABI);
		// const newBrand = await clubContract.createBrand()
		console.log(clubContract);

		// const tx = {
		// 	to: CONTRACT_ADDRESS,
		// 	data: createBrandData,
		// };
		// const txResponse = await smartAccount.sendGasLessTransaction({ transaction: tx });
		// console.log(txResponse);
		// const tx1 = {
		// 	to: CONTRACT_ADDRESS,
		// 	data: check,
		// };
		// const txResponse1 = await smartAccount.sendGasLessTransaction({ transaction: tx1 });

		// console.log(tx1);
		router.push('/dashboard');
		setLoading(false);
	};

	const deployNFTContract = async () => {
		const result = await fetch(
			`/api/service/deply_nft_contract?name=${form.values.collectible_name}&symbol=${form.values.collectible_symbol}&owner_address=${address}&metadata_updatable=false`,
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
	};

	return (
		<Layout className="bg-blue-50 min-h-screen">
			<AccountLayout>
				<div className="p-10">
					<div className="mb-5">
						<h4 className="font-bold text-xl mb-2">Create a campaign</h4>
						{/* <Breadcrumbs separator="→">{items}</Breadcrumbs> */}
					</div>
					<form
						className="space-y-5"
						onSubmit={(e) => {
							e.preventDefault();
							deployNFTContract();
							handleSubmission();
							try {
								fetch('/api/service/create_campaign', {
									method: 'POST',
									body: JSON.stringify(form.values),
								});
							} catch (e) {
								console.log(e);
							}
						}}
					>
						<TextInput label="Campaign Name" {...form.getInputProps('campaign_name')} />

						<ImageUpload
							label="Cover Image"
							onUploadFile={(file) => {
								form.setFieldValue('cover_image', file);
							}}
							selectedFile={form.values.cover_image}
						/>

						<Input.Wrapper label="Campaign Type">
							<div>
								<SegmentedControl
									data={[
										{ label: 'Paid', value: 'paid' },
										{ label: 'Lens Post', value: 'lens_post' },
										{ label: 'Purchase 5 times', value: 'purchase_5times' },
									]}
									onChange={(val) => form.setFieldValue('campaign_type', val)}
									{...form.getInputProps('campaign_type')}
								/>
							</div>
						</Input.Wrapper>

						{form.values.campaign_type === 'paid' ? (
							<>
								<TextInput label="Collectible Price" {...form.getInputProps('collectible_price')} />
								<NumberInput
									label="Amount of Collectibles"
									{...form.getInputProps('amount_of_collectibles')}
								/>
							</>
						) : null}

						<Input.Wrapper label="Experience">
							<div>
								<SegmentedControl
									{...form.getInputProps('experience')}
									data={[
										{ label: 'Collectable', value: 'collectable' },
										{ label: 'Event Ticket', value: 'event_ticket' },
										{ label: 'Video', value: 'video' },
										{ label: 'Discount', value: 'discount' },
									]}
								/>
							</div>
						</Input.Wrapper>

						{form.values.experience === 'video' ? (
							<>
								<LivepeerConfig client={livePeerClient} theme={livePeerTheme}>
									<VideoFileUpload />
								</LivepeerConfig>
							</>
						) : null}

						<Input.Wrapper label="Target">
							<div>
								<SegmentedControl
									{...form.getInputProps('target')}
									data={[
										{ label: 'Everyone', value: 'everyone' },
										{ label: 'NFT Holder', value: 'nft_holder' },
										{ label: 'Verified Users', value: 'verified_users' },
									]}
								/>
							</div>
						</Input.Wrapper>

						<DateRangePicker
							label="Duration"
							placeholder=""
							//@ts-ignore
							value={form.values.duration}
							//@ts-ignore
							onChange={(val, val2) => form.setFieldValue('duration', [val, val2])}
						/>

						<div className="grid gap-5 md:grid-cols-2">
							<TextInput label="Collectible Name" {...form.getInputProps('campaign_name')} />
							<TextInput label="Collectible Symbol" {...form.getInputProps('campaign_symbol')} />
						</div>

						<div className="grid grid-cols-3">
							<ImageUpload
								label="Digital Collectible image"
								isDetailsHidden
								onUploadFile={(file) => {
									form.setFieldValue('collectible_image', file);
								}}
								selectedFile={form.values.collectible_image}
							/>
						</div>

						<Button color="dark" radius={'md'}>
							Create
						</Button>
					</form>
				</div>
			</AccountLayout>
		</Layout>
	);
}
