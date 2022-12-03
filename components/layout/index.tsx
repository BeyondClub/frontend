import { Button } from '@mantine/core';
import { useWeb3AuthContext } from 'context/SocialLoginContext';
import { shortenAddress } from 'libs/helpers';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/imgs/logo.svg';

const Layout = ({ children, className }) => {
	const { connect, address, loading: eoaWalletLoading } = useWeb3AuthContext();

	return (
		<section className={className}>
			<header className="mx-auto max-w-screen-xl px-1 md:px-4 sm:px-6 relative py-5">
				<div className="flex justify-between">
					<Link href="/dashboard" passHref className="cursor-pointer">
						<Image src={logo} alt="" width={200} height={300} />
					</Link>

					{address ? (
						<div className="flex items-center space-x-5">
							<Link href="/dashboard" passHref>
								Dashboard
							</Link>
							<button className="border px-4 py-2 text-sm bg-white rounded-md">
								{shortenAddress(address)}
							</button>
						</div>
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
