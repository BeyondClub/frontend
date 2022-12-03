import Image from 'next/image';

import { ArrowRightIcon } from '@radix-ui/react-icons';
import Meta from 'components/layout/Meta';
import Link from 'next/link';
import Navbar from '../components/brandComponents/Navbar';
import './index.scss';

export default function Home() {
	return (
		<div className="landing bg-gray-50">
			<Meta title="Home" />
			<Navbar/>
			<div className="modify grid grid-cols-2 gap-5 place-items-center pl-10">
				<div className='z-50'>
					<h2 className="z-50 text-6xl font-[550] leading-40 whitespace-nowrap ml-7 ">
						Supercharge your <br/>customer engagement<br/> with No-code NFT <br/> loyalty program.
					</h2>
					<div>
						<Link
							className=" bg-gray-900 px-6 rounded-full text-white ml-7 mt-10 w-max py-4 flex items-center"
							href="/register"
							passHref
						>
							Get Started <ArrowRightIcon className="ml-5" />
						</Link>
					</div>
				</div>
				<div className="cards grid place-items-end ml-auto">
					<Image src={'/assets/Card3.png'} alt="" height={550} width={550} className="ml-auto" />
					{/* <Image src={card2} alt="" height={330} className="ml-auto" /> */}
				</div>
			</div>
		<div className='landing-bg-blur'></div>
		</div>
	);
}
