import { LivepeerConfig } from '@livepeer/react';
import { Anchor, Button, Input, NumberInput, SegmentedControl, TextInput } from '@mantine/core';
import { DateRangePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import ImageUpload from 'components/common/ImageUpload';
import Layout from 'components/layout';
import AccountLayout from 'components/layout/AccountLayout';
import { livePeerClient, livePeerTheme } from 'components/LivePeer/Player';
import VideoFileUpload from 'components/LivePeer/VideoFileUpload';
import dayjs from 'dayjs';

const items = [
	{ title: 'Dashboard', href: '/dashboard' },
	{ title: 'New Campaign', href: '#' },
].map((item, index) => (
	<Anchor href={item.href} key={index}>
		{item.title}
	</Anchor>
));

export default function Register() {
	const form = useForm({
		initialValues: {
			campaign_name: '',
			cover_image: '',
			collectible_image: '',
			campaign_type: 'lens_post',
			collectible_price: '',
			amount_of_collectibles: '',
			experience: 'collectable',
			target: 'everyone',
			duration: [new Date(dayjs().startOf('month').toDate()), new Date(dayjs().endOf('month').toDate())],
		},
	});

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
							<TextInput label="Collectible Symbol" {...form.getInputProps('campaign_name')} />
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
