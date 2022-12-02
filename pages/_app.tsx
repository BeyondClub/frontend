import { Web3AuthProvider } from '../context/SocialLoginContext';

import { createEmotionCache, MantineProvider } from '@mantine/core';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css';

const myCache = createEmotionCache({ key: 'beyondclub' });

function MyApp({ Component, pageProps }) {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS emotionCache={myCache}>
			<Web3AuthProvider>
				<Component {...pageProps} />
			</Web3AuthProvider>
			<Toaster />
		</MantineProvider>
	);
}

export default MyApp;
