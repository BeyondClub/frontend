import Banner from '../../components/brandPage/Banner';
import Cards from '../../components/brandPage/Cards';
import Header from '../../components/brandPage/Header';

const Profile = () => {
	return (
		<div className="outer-bg">
			<Header />
			<Banner />
			<h2 className="brand-hp-txt">Availabe Campaigns for you</h2>
			<div className="cards-cont">
				<Cards
					img="/assets/card-bg-1.png"
					title="Christmas Gift"
					line1="Buy with $10 USD"
					line2="Get the access of special Christmas event"
					time=" 5 days"
					redeemed=" 150"
					total="300"
				/>
			</div>

			<h2 className="brand-hp-txt">My Collectables</h2>
			<div className="cards-cont">
				<Cards
					img="/assets/card-bg-1.png"
					title="Christmas Gift"
					line1="Buy with $10 USD"
					line2="Get the access of special Christmas event"
				/>
				<Cards img="/assets/card-bg-2.png" title="Christmas Gift" line1="Buy with $10 USD" />
			</div>
		</div>
	);
};

export default Profile;
