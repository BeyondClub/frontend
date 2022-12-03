import Banner from 'components/brandPage/Banner';
import CampaignDetails from 'components/brandPage/CampaignDetails';
import Header from 'components/brandPage/Header';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Campaign = () => {
	const [details, setDetails] = useState(null);
	const router = useRouter();

	console.log(details);

	return (
		<div>
			<Header />
			<Banner img="/assets/banner-2.png" />
			<div className="flex flex-row my-20 px-10">
				<div className="flex basis-3/4 justify-center">
					<img className="rounded-md w-2/3 h-1/2" src="/assets/card-bg-3.png" alt="campagin-img" />
				</div>
				<div>
					<CampaignDetails
						title="Christmas Gift Campaign"
						desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
						duration="2022/12/01 0:00 - 2022/12/24 10:00 UTC"
						howToGet="You can buy it for $10 USD"
						whatToGet="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
						claimablePeriod="2022/12/01 0:00 - 2022/12/24 10:00 UTC"
						redeemed="150"
						nft_name="NFT Name"
						nft_symbol="NFT"
						total="300"
					/>
				</div>
			</div>
		</div>
	);
};

export default Campaign;
