import React from 'react';
import Hero from './HeroPricing';
import Charges from './Charges';
import OpenAccount from "../OpenAccount.js";
import Brokerage from './Bokerage.js';

function PricingPage() {
    return ( 
        <>
            <Hero />
            <Brokerage />
            <Charges />
            <OpenAccount />
        </>
     );
}

export default PricingPage;