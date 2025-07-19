import React from 'react';
import OpenAccount from "../OpenAccount";
import Hero from "./Hero";
import InvestmentOptions from "./InvestmentOptions";
import Benefits from "./Benefits";
import AccountType from './AccountTypes';

function SignUp() {
    return ( 
        <>
            <Hero />
            <InvestmentOptions />
            <Benefits />
            <AccountType />
            <OpenAccount />
        </>
     );
}

export default SignUp;