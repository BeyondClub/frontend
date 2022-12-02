import { Input } from '@mantine/core';

const ImageUpload = ({ label }) => {
	return (
		<Input.Wrapper label={label}>
			<div className="bg-gray-50 h-20 grid place-items-center mt-2">
				{/* <UserIcon className="text-gray-500" /> */}
				upload
			</div>
		</Input.Wrapper>
	);
};

export default ImageUpload;
