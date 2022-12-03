import {
  createReactClient,
  LivepeerConfig,
  studioProvider,
  ThemeConfig,
} from "@livepeer/react";

const client = createReactClient({
  provider: studioProvider({ apiKey: "4b6bf587-0495-46e7-90e9-80e4aa0494dd" }),
});

const livepeerTheme: ThemeConfig = {
  colors: {
    accent: "rgb(0, 145, 255)",
    containerBorderColor: "rgba(0, 145, 255, 0.9)",
  },
  fonts: {
    display: "Inter",
  },
};

import { Player } from "@livepeer/react";

const playbackId = "666899k9r9t36tnh";
  

export function Livepeer() {
  return (
    <Player
      title="Waterfalls"
      playbackId={playbackId}
      loop
      autoPlay
      showTitle={false}
      muted
    />
  );
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