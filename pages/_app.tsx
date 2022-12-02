import { createClient, Provider } from 'urql';
import { Web3AuthProvider } from '../context/SocialLoginContext';

import { createEmotionCache, MantineProvider } from '@mantine/core';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css';

const myCache = createEmotionCache({ key: 'beyondclub' });

const client = createClient({
	url: 'https://api.lens.dev',
});

function MyApp({ Component, pageProps }) {
	return (
		<Provider value={client}>
			<MantineProvider withGlobalStyles withNormalizeCSS emotionCache={myCache}>
				<Web3AuthProvider>
					<Component {...pageProps} />
				</Web3AuthProvider>
				<Toaster />
			</MantineProvider>
		</Provider>
	);
}

export default MyApp;
