import React from 'react';

function HeroPricing() {
    return ( 
        <div className='container'>
            <div className='row p-5 mt-5 border-bottom text-center'>
                <h1>Charges</h1>
                <h3 className='mt-2 fs-5 text-muted'>List of all charges and taxes</h3>
            </div>
            <div className='row p-5 mt-5 text-center' >
                <div className='col-4 p-4'>
                     <img src='media/images/pricing0.svg' />
                     <h1 className='fs-5'>Free equity delivery</h1>
                     <p className='mt-3 text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-4'>
                     <img src='media/images/other-trades.svg' />
                     <h1 className='fs-5'>Intraday and F&O trades</h1>
                     <p className='mt-3 text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-4'>
                     <img src='media/images/pricing0.svg' />
                     <h1 className='fs-5'>Free direct MF</h1>
                     <p className='mt-3 text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
                
        </div>
     );
}

export default HeroPricing;