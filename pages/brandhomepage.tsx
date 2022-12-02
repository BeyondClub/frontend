import Header from '../components/brandPage/Header'
import Cards from '../components/brandPage/Cards'
import Banner from '../components/brandPage/Banner'
const brandhomepage = () => {
    return (
        <div className="outer-bg">
            <Header/>
            <Banner/>
            <h2 className='brand-hp-txt'>Availabe Campaigns for you</h2> 
            <div>
                <Cards img='assets/card-bg-1.png' title='Christmas Gift' line1='Buy with $10 USD' line2='Get the access of special Christmas event' time=' 5 days' redeemed=' 150' total='300'/>
            </div>

            <h2 className='brand-hp-txt'>My Collectables</h2> 
        </div>
    );
}

export default brandhomepage;