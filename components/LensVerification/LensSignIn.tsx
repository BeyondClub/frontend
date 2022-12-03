import { Button } from '@mantine/core';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { UserLensProfile } from 'graphql/queries';
import { useEffect } from 'react';
import { useQuery } from 'urql';

const FetcHMyLendsHandle = ({ ethAddress, onHandle }) => {
	const [result] = useQuery({
		query: UserLensProfile,
		variables: {
			request: {
				ownedBy: ethAddress,
			},
		},
	});

	useEffect(() => {
		if (result && result.data && result.data.profiles.items) {
			if (result.data.profiles.items[0]) {
				const profile = result.data.profiles.items[0];
				if (profile.handle) onHandle(profile.handle);
			}
		}
	}, [result]);

	return <></>;
};

const ConnectButtonLink = ({ onHandle }) => {
	return (
		<>
			<ConnectButton.Custom>
				{({
					account,
					chain,
					openAccountModal,
					openChainModal,
					openConnectModal,
					authenticationStatus,
					mounted,
				}) => {
					// Note: If your app doesn't use authentication, you
					// can remove all 'authenticationStatus' checks
					const ready = mounted && authenticationStatus !== 'loading';
					const connected =
						ready &&
						account &&
						chain &&
						(!authenticationStatus || authenticationStatus === 'authenticated');

					return (
						<>
							{(() => {
								if (!connected) {
									return (
										<Button
											onClick={openConnectModal}
											color="dark"
											radius={'md'}
											leftIcon={
												<img
													src="/assets/lens.svg"
													className="w-5 inline-block  text-gray-500"
												/>
											}
										>
											Sign in with Lens
										</Button>
									);
								}

								if (chain.unsupported) {
									return (
										<a
											onClick={openChainModal}
											className="hover:bg-gray-100 font-bold text-gray-500 hover:text-gray-900 text-sm  px-4 py-2 rounded-full cursor-pointer"
										>
											Wrong network
										</a>
									);
								}

								return (
									<FetcHMyLendsHandle
										ethAddress={account.address}
										onHandle={(val) => {
											onHandle(val);
										}}
									/>
								);

								return (
									<div style={{ display: 'flex' }}>
										<a
											onClick={openAccountModal}
											className="hover:bg-gray-100 font-bold text-gray-500 hover:text-gray-900 text-sm  px-4 py-2 rounded-full cursor-pointer"
										>
											{account.displayName}
										</a>
									</div>
								);
							})()}
						</>
					);
				}}
			</ConnectButton.Custom>
		</>
	);
};

export default ConnectButtonLink;
