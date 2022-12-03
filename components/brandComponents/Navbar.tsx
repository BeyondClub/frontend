import Image from 'next/image';
import logo from '../../public/imgs/logo.svg';

import './Navbar.scss';

const LandingPage = () => {
	return (
		<div className="navbar bg-gray-50">
			<Image src={logo} alt="" width={200} height={300} />
			{/* <Link className="bg-gray-900 px-5 py-2  rounded-md text-gray-100" href="/register" passHref>
				Sign in
			</Link> */}
		</div>
	);
};
export default LandingPage;
