import Image from 'next/image';
import card1 from '../public/imgs/card1.png';
import card2 from '../public/imgs/card2.png';

import { ArrowRightIcon } from '@radix-ui/react-icons';
import Meta from 'components/layout/Meta';
import Link from 'next/link';
import Navbar from '../components/brandComponents/Navbar';
import './index.scss';

export default function Home() {
	return (
		<div className="landing bg-gray-50 min-h-screen">
			<Meta title="Home" />
			<Navbar />
			<div className="grid grid-cols-2 gap-5 place-items-center pl-10">
				<div>
					<h2 className="text-6xl font-bold leading-40">
						Supercharge your customer engagement with No-code NFT loyalty program.
					</h2>
					<div>
						<Link
							className="bg-gray-900 px-6 rounded-md text-white mt-10 w-max py-4 flex items-center"
							href="/register"
							passHref
						>
							Get Started <ArrowRightIcon className="ml-5" />
						</Link>
					</div>
				</div>
				<div className="cards grid place-items-end ml-auto">
					<Image src={card1} alt="" height={330} className="ml-auto" />
					<Image src={card2} alt="" height={330} className="ml-auto" />
				</div>
			</div>
		</div>
	);
}
