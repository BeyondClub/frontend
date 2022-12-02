import { Button, Input, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import Card from '../components/common/Card';
import ImageUpload from '../components/common/ImageUpload';

export default function Register() {
	const form = useForm({
		initialValues: {
			brand_name: '',
			username: '',
			lens_handle: '',
			profile_image: '',
			cover_image: '',
		},
	});

	return (
		<div className="bg-blue-50 min-h-screen">
			<div className="mx-auto max-w-screen-md px-1 md:px-4 sm:px-6 relative py-10">
				<Card>
					<h4 className="font-bold text-xl mb-5">Create an account</h4>

					<form
						className="space-y-5"
						onSubmit={(e) => {
							e.preventDefault();
						}}
					>
						<TextInput label="Brand Name" {...form.getInputProps('brand_name')} />
						<TextInput
							label="Username (it will be your URL. ex: https://beyondclub.xyz/username)"
							{...form.getInputProps('username')}
						/>
						<Input.Wrapper label="Connect your Lens account">
							<div className="mt-2">
								<Button color="dark" radius={'md'}>
									Sign in with Lens
								</Button>
							</div>
						</Input.Wrapper>
						<div className="grid grid-cols-3">
							<ImageUpload label="Profile Image" isDetailsHidden />
						</div>

						<ImageUpload label="Cover Image" />
						<Button color="dark" radius={'md'}>
							Create
						</Button>
					</form>
				</Card>
			</div>
		</div>
	);
}
