import { useCreateAsset } from '@livepeer/react';
import { Button, FileInput } from '@mantine/core';

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
		<>
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

			<Button
				className="mt-2"
				disabled={status === 'loading' || !createAsset}
				onClick={() => {
					createAsset?.();
				}}
			>
				Upload Video Asset
			</Button>
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
		</>
	);
};

export default VideoFileUpload;
