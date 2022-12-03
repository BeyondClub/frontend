import CustomerLayout from 'components/layout/CustomerLayout';
import Meta from 'components/layout/Meta';
import Banner from '../../components/brandPage/Banner';
import Cards from '../../components/brandPage/Cards';

const Profile = () => {
	return (
		<CustomerLayout>
			<Meta title="Profile" />

			<Banner />
			<section className="mx-auto max-w-screen-xl px-1 md:px-4 sm:px-6 relative py-10">
				<h2 className="brand-hp-txt">Availabe Campaigns for you</h2>
				<div className="cards-cont">
				<Cards 
				img='assets/card-bg-1.png'
				title='Christmas Gift' 
				line1='Buy with $10 USD' 
				line2='Get the access of special Christmas event'
				time=' 5 days'
				redeemed=' 150' 
				total='300'/>
                <Cards 
				img='assets/card-bg-2.png'
				title='Autumn Gift'
				line1='Buy with $10 USD' 
				line2='Get the access of special Christmas event' 
				time=' 5 days' 
				redeemed=' 150' 
				total='300'/>
                <Cards 
				img='assets/card-bg-3.png' 
				title='Halloween Gift' 
				line1='Buy with $10 USD' 
				line2='Get the access of special Christmas event' 
				time=' 5 days' 
				redeemed=' 150' 
				total='300'/>
                {/* <Cards 
				img='assets/card-bg-1.png' 
				title='Christmas Gift' 
				line1='Buy with $10 USD' 
				line2='Get the access of special Christmas event' 
				time=' 5 days' 
				redeemed=' 150' 
				total='300'/> */}
                
				</div>

				<h2 className="brand-hp-txt">My Collectables</h2>
				<div className="cards-cont">
				<Cards 
				img='assets/card-bg-1.png' 
				title='Christmas Gift' 
				line1='Buy with $10 USD' 
				line2='Get the access of special Christmas event'/>
                <Cards 
				img='assets/card-bg-2.png' 
				title='Halloween Gift' 
				line1='Buy with $10 USD' />
				</div>
			</section>
		</CustomerLayout>
	);
};

export default Profile;
