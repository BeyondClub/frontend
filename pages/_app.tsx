import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chains, wagmiClient } from 'libs/connectors';
import { createClient, Provider } from 'urql';
import { WagmiConfig } from 'wagmi';
import { Web3AuthProvider } from '../context/SocialLoginContext';

import { createEmotionCache, MantineProvider } from '@mantine/core';
import { Toaster } from 'react-hot-toast';

import '@rainbow-me/rainbowkit/styles.css';
import '../styles/globals.css';

const myCache = createEmotionCache({ key: 'beyondclub' });

const client = createClient({
	url: 'https://api.lens.dev',
});

function MyApp({ Component, pageProps }) {
	return (
		<Provider value={client}>
			<MantineProvider withGlobalStyles withNormalizeCSS emotionCache={myCache}>
				<WagmiConfig client={wagmiClient}>
					<RainbowKitProvider chains={chains} modalSize="compact" appInfo={{ appName: 'Sendacoin.to' }}>
						<Web3AuthProvider>
							<Component {...pageProps} />
						</Web3AuthProvider>
					</RainbowKitProvider>
				</WagmiConfig>
				<Toaster />
			</MantineProvider>
		</Provider>
	);
}

export default MyApp;
