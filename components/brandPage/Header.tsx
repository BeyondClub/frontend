import { WorldIDWidget } from '@worldcoin/id';
import { useWeb3AuthContext } from 'context/SocialLoginContext';
import { shortenAddress } from 'libs/helpers';

const Header = () => {
	const { connect, address, loading: eoaWalletLoading } = useWeb3AuthContext();

	return (
		<div className="navbar">
			<div className="navbar-links">
				<div className="navbar-links-logo">
					<img src="/assets/logo.png" alt="header-logo" />
				</div>
				<div className="navbar-links-container space-x-5">
					{address ? (
						<>
							<button className="bg-gray-100 px-5 py-2 rounded text-gray-600">
								{shortenAddress(address)}
							</button>

							<WorldIDWidget
								actionId="wid_BPZsRJANxct2cZxVRyh80SFG" // obtain this from developer.worldcoin.org
								signal="my_signal"
								enableTelemetry
								onSuccess={(verificationResponse) => console.log(verificationResponse)}
								onError={(error) => console.error(error)}
								debug={true} // to aid with debugging, remove in production
							/>
						</>
					) : (
						<button className="nav-btn" onClick={connect} disabled={eoaWalletLoading}>
							Login
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
