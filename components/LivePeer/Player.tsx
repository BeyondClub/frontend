import { createReactClient, LivepeerConfig, studioProvider, ThemeConfig } from '@livepeer/react';

const client = createReactClient({
	provider: studioProvider({ apiKey: 'yourStudioApiKey' }),
});

const livepeerTheme: ThemeConfig = {
	colors: {
		accent: 'rgb(0, 145, 255)',
		containerBorderColor: 'rgba(0, 145, 255, 0.9)',
	},
	fonts: {
		display: 'Inter',
	},
};

import { Player } from '@livepeer/react';

const playbackId = 'bafybeigtqixg4ywcem3p6sitz55wy6xvnr565s6kuwhznpwjices3mmxoe';

export function Livepeer() {
	return <Player title="Waterfalls" playbackId={playbackId} loop autoPlay showTitle={false} muted />;
}

const VideoPlayer = () => {
	return (
		<>
			<LivepeerConfig client={client} theme={livepeerTheme}>
				<Livepeer />
			</LivepeerConfig>
		</>
	);
};

export default VideoPlayer;
