import { Button } from '@mantine/core';
import { useWeb3AuthContext } from 'context/SocialLoginContext';

const Layout = ({ children, className }) => {
	const { connect, address, loading: eoaWalletLoading } = useWeb3AuthContext();

	return (
		<section className={className}>
			<header className="mx-auto max-w-screen-xl px-1 md:px-4 sm:px-6 relative py-10">
				<div className="flex justify-between">
					<b>BeyondClub</b>

					{address ? (
						<button className="nav-btn">Sign Up</button>
					) : (
						<Button color="dark" radius="md" onClick={connect} disabled={eoaWalletLoading}>
							Login
						</Button>
					)}
				</div>
			</header>

			<main>{children}</main>

			<footer className="text-center text-gray-500 py-5 text-sm">
				<p>&copy; 2022 BeyondClub. All rights reserved.</p>
			</footer>
		</section>
	);
};

export default Layout;
