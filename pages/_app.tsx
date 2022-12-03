import { NavigationProgress } from '@mantine/nprogress';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { chains, wagmiClient } from 'libs/connectors';
import { createClient, Provider } from 'urql';
import { WagmiConfig } from 'wagmi';
import { SmartAccountProvider } from '../context/SmartAccountContext';
import { Web3AuthProvider } from '../context/SocialLoginContext';

import { createEmotionCache, MantineProvider } from '@mantine/core';
import { Toaster } from 'react-hot-toast';

import '@rainbow-me/rainbowkit/styles.css';
import { RouterTransition } from 'components/common/RouterTransition';
import '../styles/globals.css';

const myCache = createEmotionCache({ key: 'beyondclub' });

const client = createClient({
	url: 'https://api.lens.dev',
});

function MyApp({ Component, pageProps }) {
	return (
		<Provider value={client}>
			<NavigationProgress color={'#000'} />
			<RouterTransition />
			<MantineProvider withGlobalStyles withNormalizeCSS emotionCache={myCache}>
				<WagmiConfig client={wagmiClient}>
					<RainbowKitProvider chains={chains} modalSize="compact" appInfo={{ appName: 'Sendacoin.to' }}>
						<Web3AuthProvider>
							<SmartAccountProvider>
								<Component {...pageProps} />
							</SmartAccountProvider>
						</Web3AuthProvider>
					</RainbowKitProvider>
				</WagmiConfig>
				<Toaster />
			</MantineProvider>
		</Provider>
	);
}

export default MyApp;
