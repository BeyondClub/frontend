import { createEmotionCache, MantineProvider } from '@mantine/core';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css';

const myCache = createEmotionCache({ key: 'beyondclub' });

function MyApp({ Component, pageProps }) {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS emotionCache={myCache}>
			<Component {...pageProps} />
			<Toaster />
		</MantineProvider>
	);
}

export default MyApp;
