import Header from '../components/brandPage/Header'
import Cards from '../components/brandPage/Cards'
import Banner from '../components/brandPage/Banner'
import Modalnew from '../components/brandPage/TransactionsFetch'
import { useState } from 'react'
// import React from 'react'
const brandhomepage = () => {
    
    const [open, setOpen] = useState(false);
        return (
        <div className="outer-bg">
            <Header/>
            <Banner img='/assets/banner.png'/>
            <button onClick={()=>setOpen(true)}> CLick me </button>
            <h2 className='brand-hp-txt'>Availabe Campaigns for you</h2> 
            <div className='cards-cont'>
                <Cards img='assets/card-bg-1.png' title='Christmas Gift' line1='Buy with $10 USD' line2='Get the access of special Christmas event' time=' 5 days' redeemed=' 150' total='300'/>
                <Cards img='assets/card-bg-2.png' title='Christmas Gift' line1='Buy with $10 USD' line2='Get the access of special Christmas event' time=' 5 days' redeemed=' 150' total='300'/>
                <Cards img='assets/card-bg-3.png' title='Christmas Gift' line1='Buy with $10 USD' line2='Get the access of special Christmas event' time=' 5 days' redeemed=' 150' total='300'/>
                <Cards img='assets/card-bg-1.png' title='Christmas Gift' line1='Buy with $10 USD' line2='Get the access of special Christmas event' time=' 5 days' redeemed=' 150' total='300'/>
                {/* <Cards img='assets/card-bg-1.png' title='Christmas Gift' line1='Buy with $10 USD' line2='Get the access of special Christmas event' time=' 5 days' redeemed=' 150' total='300'/> */}
            </div>

            <h2 className='brand-hp-txt'>My Collectables</h2> 
            <div className='cards-cont'>
                <Cards img='assets/card-bg-1.png' title='Christmas Gift' line1='Buy with $10 USD' line2='Get the access of special Christmas event'/>
                <Cards img='assets/card-bg-2.png' title='Christmas Gift' line1='Buy with $10 USD' />
            </div>
            <Modalnew chainId='1' txnHash='0xbda92389200cadac424d64202caeab70cd5e93756fe34c08578adeb310bba254' opened={open} setOpened={setOpen} />
        </div>
    );
}

export default brandhomepage;