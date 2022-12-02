import { Group, Input, Text } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { Cross1Icon, ImageIcon, UploadIcon } from '@radix-ui/react-icons';

const ImageUpload = (props) => {
	const { label } = props;

	return (
		<Input.Wrapper label={label}>
			<Dropzone
				className="mt-2"
				onDrop={(files) => console.log('accepted files', files)}
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

					{!props.isDetailsHidden ? (
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
