import Transak from '@biconomy/transak';
import { Button } from '@mantine/core';
import { useWeb3AuthContext } from '../../context/SocialLoginContext';

const TransakWidget = () => {
	const { connect, address, loading: eoaWalletLoading } = useWeb3AuthContext();

	const getDetails = async () => {
		import('@biconomy/web3-auth').then(async (SocialLogin: any) => {
			const socialLoginSDK = new SocialLogin.default();
			await socialLoginSDK.init('0x5');
			socialLoginSDK.showConnectModal();
			// socialLoginSDK.showWallet();

			// after login get the user info
			const userInfo = await socialLoginSDK.getUserInfo();

			console.log(address);
			// use this info for transak package
			// const transak = new Transak('STAGING', {
			// 	walletAddress: address,
			// 	userData: {
			// 		firstName: userInfo?.name || '',
			// 		email: userInfo?.email || '',
			// 		address: {
			// 			countryCode: 'in',
			// 		},
			// 	},
			// 	hideMenu: true,
			// 	isAutoFillUserData: true,
			// 	isFeeCalculationHidden: true,
			// 	defaultFiatAmount: 100,
			// 	disablePaymentMethods: true,
			// 	exchangeScreenTitle: 'Purchase NFT',
			// 	hideExchangeScreen: true,
			// 	isDisableCrypto: true,
			// 	disableWalletAddressForm: true,
			// 	fiatCurrency: 'INR',
			// 	paymentMethod: 'eth',
			// });

			const transak = new Transak('STAGING', {
				walletAddress: address,
				userData: {
					firstName: userInfo?.name || '',
					email: userInfo?.email || '',
				},
				hideMenu: true,
				isAutoFillUserData: true,
				isFeeCalculationHidden: true,
				defaultFiatAmount: 100,
				exchangeScreenTitle: 'Withdraw Money',
				hideExchangeScreen: true,
				isDisableCrypto: true,
				disableWalletAddressForm: true,
				paymentMethod: 'eth',
			});
			transak.init();
		});
	};

	return (
		<>
			<Button color="default" radius="lg" variant="default" onClick={getDetails}>
				Withdraw
			</Button>
		</>
	);
};

export default TransakWidget;
