import '@biconomy/web3-auth/dist/src/style.css';
import Image from 'next/image';

import { ArrowRightIcon } from '@radix-ui/react-icons';
import Meta from 'components/layout/Meta';
import { useWeb3AuthContext } from 'context/SocialLoginContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Navbar from '../components/brandComponents/Navbar';
import './index.scss';

export default function Home() {
	const { connect, address, loading: eoaWalletLoading } = useWeb3AuthContext();
	const router = useRouter();

	useEffect(() => {
		if (address) {
			// router.push('/dashboard');
		}
	}, [address]);

	return (
		<div className="landing bg-gray-50 min-h-screen">
			<Meta title="Home" />
			<Navbar />
			<div className="grid grid-cols-2 gap-5 place-items-center pl-10">
				<div>
					<h2 className="text-7xl font-medium leading-40">
						Supercharge your customer engagement with No-code NFT loyalty program.
					</h2>
					<div>
						<Link href="/register" as="/register">
							<button
								onClick={connect}
								disabled={eoaWalletLoading}
								className="bg-gray-900 cursor-pointer hover:bg-gray-800 px-6 rounded-full text-white mt-10 w-max py-4 flex items-center"
							>
								Get Started <ArrowRightIcon className="ml-5" />
							</button>
						</Link>
					</div>
				</div>
				<div className="cards grid place-items-end ml-auto">
					<Image src={`/imgs/card3.png`} alt="" height={550} className="ml-auto" />
					{/* <Image src={card2} alt="" height={330} className="ml-auto" /> */}
				</div>
			</div>
		</div>
	);
}
