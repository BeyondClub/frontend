import { Button, Input, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import Layout from 'components/layout';

import ConnectButtonLink from 'components/LensVerification/LensSignIn';
import { useWeb3AuthContext } from 'context/SocialLoginContext';
import { UserLensProfile } from 'graphql/queries';
import { useEffect, useState } from 'react';
import { useQuery } from 'urql';
import Card from '../components/common/Card';
import ImageUpload from '../components/common/ImageUpload';

const RegiserWrapper = () => {
	const { connect, address, loading: eoaWalletLoading } = useWeb3AuthContext();

	if (address) {
		return <Register address={address} />;
	}
	return <p className="text-center text-gray-500">Loading!</p>;
};

const Register = ({ address }) => {
	const [ethAddress, setAddress] = useState(address);

	const [result] = useQuery({
		query: UserLensProfile,
		variables: {
			request: {
				ownedBy: ethAddress,
			},
		},
	});

	const form = useForm({
		initialValues: {
			brand_name: '',
			username: '',
			lens_handle: null,
			profile_image: '',
			cover_image: '',
		},
	});

	useEffect(() => {
		if (result && result.data && result.data.profiles.items) {
			if (result.data.profiles.items[0]) {
				const profile = result.data.profiles.items[0];
				if (profile.handle) form.setFieldValue('lens_handle', profile.handle);
			}
		}
	}, [result]);

	return (
		<Layout className="bg-blue-50 min-h-screen">
			<div className="mx-auto max-w-screen-md px-1 md:px-4 sm:px-6 relative py-5">
				<Card>
					<h4 className="font-bold text-xl mb-5">Create an account</h4>

					<form
						className="space-y-5"
						onSubmit={(e) => {
							e.preventDefault();
						}}
					>
						<TextInput label="Brand Name" {...form.getInputProps('brand_name')} />
						<div>
							<TextInput label="Username" {...form.getInputProps('username')} />

							<p className="text-sm text-gray-500 mt-1">
								it will be your URL. ex: https://beyondclub.xyz/u/{form.values.username}
							</p>
						</div>

						{form.values.lens_handle === null ? (
							<Input.Wrapper label="Connect your Lens account">
								<div className="mt-2">
									<ConnectButtonLink
										onHandle={(handle) => {
											form.setFieldValue('lens_handle', handle);
										}}
									/>
								</div>
							</Input.Wrapper>
						) : (
							<Input.Wrapper label="Lens Handle">
								<div className="mt-1 text-gray-500 border w-max px-2 rounded text-sm py-1">
									<img src="/assets/lens.svg" className="w-5 inline-block mr-2 text-gray-500" />

									{form.values.lens_handle}
								</div>
							</Input.Wrapper>
						)}
						<div className="grid grid-cols-3">
							<ImageUpload
								label="Profile Image"
								selectedFile={form.values.profile_image}
								isDetailsHidden
								onUploadFile={(file) => {
									form.setFieldValue('profile_image', file);
								}}
							/>
						</div>

						<ImageUpload
							label="Cover Image"
							selectedFile={form.values.cover_image}
							onUploadFile={(file) => {
								form.setFieldValue('cover_image', file);
							}}
						/>
						<Button color="dark" radius={'md'}>
							Create
						</Button>
					</form>
				</Card>
			</div>
		</Layout>
	);
};

export default RegiserWrapper;
