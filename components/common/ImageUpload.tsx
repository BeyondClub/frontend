import { Group, Input, Text } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { Cross1Icon, ImageIcon, UploadIcon } from '@radix-ui/react-icons';
import { Web3StorageClient } from 'libs/WebStore';
import { useEffect, useState } from 'react';

const ImageUpload = (props) => {
	const { label } = props;
	const [selectedFile, setSelectedFile] = useState<any>();

	const changeHandler = (files: any) => {
		const file = files[0];
		const blob = file.slice(0, file.size, 'image/png');
		const newFile = new File([blob], file?.name.replaceAll(' ', '-'), {
			type: file?.type,
		});
		setSelectedFile(newFile);
		// setIsSelected(true);
	};

	async function storeFileUsingWebStorage() {
		const rootCid = await Web3StorageClient.put([selectedFile]);
		props.onUploadFile(rootCid);
	}

	useEffect(() => {
		if (selectedFile) {
			storeFileUsingWebStorage();
		}
	}, [selectedFile]);

	return (
		<Input.Wrapper label={label}>
			<Dropzone
				className="mt-2"
				onDrop={(files) => changeHandler(files)}
				onReject={(files) => console.log('rejected files', files)}
				maxSize={3 * 1024 ** 2}
				accept={IMAGE_MIME_TYPE}
				{...props}
			>
				<Group position="center" spacing="xl" style={{ minHeight: 120, pointerEvents: 'none' }}>
					<Dropzone.Accept>
						<UploadIcon className="w-8 h-8" />
					</Dropzone.Accept>
					<Dropzone.Reject>
						<Cross1Icon className="w-8 h-8" />
					</Dropzone.Reject>
					<Dropzone.Idle>
						<ImageIcon className="w-8 h-8" />
					</Dropzone.Idle>

					{!props?.isDetailsHidden ? (
						<div>
							<Text size="xl" inline>
								{label}
							</Text>
							<Text size="sm" color="dimmed" inline mt={7}>
								Drag images here or click to select files
							</Text>
						</div>
					) : null}
				</Group>
			</Dropzone>
		</Input.Wrapper>
	);
};

export default ImageUpload;
