import { Button, Input, NumberInput, SegmentedControl, TextInput } from '@mantine/core';
import { DateRangePicker } from '@mantine/dates';
import { useForm } from '@mantine/form';
import Card from 'components/common/Card';
import ImageUpload from 'components/common/ImageUpload';
import Layout from 'components/layout';
import dayjs from 'dayjs';

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
			<div className="mx-auto max-w-screen-md px-1 md:px-4 sm:px-6 relative py-10">
				<Card>
					<h4 className="font-bold text-xl mb-5">Create a campaign</h4>

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

						{form.values.experience === 'video' ? <>SHOW VIDEO UPLOAD USING THELIVEPEER</> : null}

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
				</Card>
			</div>
		</Layout>
	);
}
