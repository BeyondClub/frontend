import { useCreateAsset } from '@livepeer/react';
import { FileInput, Input } from '@mantine/core';
import { useState } from 'react';

const VideoFileUpload = (props) => {
	const [video, setVideo] = useState<File | undefined>(undefined);
	const {
		mutate: createAsset,
		data: assets,
		status,
		progress,
		error,
	} = useCreateAsset(
		video
			? {
					sources: [{ name: video.name, file: video }] as const,
			  }
			: null
	);

	return (
		<Input.Wrapper label={'Video File'}>
			<FileInput
				label="Video File"
				withAsterisk
				onChange={(e) => {
					if (e) {
						setVideo(e);
					}
				}}
				accept="video/*"
			/>

			<button
				disabled={status === 'loading' || !createAsset}
				onClick={() => {
					createAsset?.();
				}}
			>
				Create Asset
			</button>
			{assets?.map((asset) => (
				<div key={asset.id}>
					<div>
						<div>Asset Name: {asset?.name}</div>
						<div>Playback URL: {asset?.playbackUrl}</div>
						<div>IPFS CID: {asset?.storage?.ipfs?.cid ?? 'None'}</div>
					</div>
				</div>
			))}

			{error && <div>{error.message}</div>}
		</Input.Wrapper>
	);
};

export default VideoFileUpload;
