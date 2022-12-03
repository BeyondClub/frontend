import React from 'react';
import Banner from '../../../components/brandPage/Banner';
import Header from '../../../components/brandPage/Header';
import CampaignDetails from '../../../components/brandPage/CampaignDetails';
const Campaign = () => {
    return (
        <div>
            <Header/>
            <Banner img='/assets/banner-2.png'/>
            <div className='flex flex-row '>
                <div className='flex basis-3/4 justify-center'>
                    <img className='rounded-md' src='/assets/card-bg-3.png' alt='campagin-img'/>
                </div>
                <div>
                <CampaignDetails title='Christmas Gift Campaign' desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?' duration='2022/12/01 0:00 - 2022/12/24 10:00 UTC' howToGet='You can buy it for $10 USD' whatToGet='Lorem ipsum dolor sit amet, consectetur adipisicing elit' claimablePeriod='2022/12/01 0:00 - 2022/12/24 10:00 UTC' redeemed='150' total='300'/>
                </div>
            </div>
        </div>
    );
}

export default Campaign;