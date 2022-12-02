import { useWeb3AuthContext } from 'context/SocialLoginContext';

const Header = () => {
	const { connect, address, loading: eoaWalletLoading } = useWeb3AuthContext();

	return (
		<div className="navbar">
			<div className="navbar-links">
				<div className="navbar-links-logo">
					<img src="/assets/logo.png" alt="header-logo" />
				</div>
				<div className="navbar-links-container">
					{address ? (
						<button className="nav-btn">Sign Up</button>
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
