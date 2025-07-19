import React from 'react';

function Benefit() {
    return ( 
        <div className='container'>
            <div className='row my-5'></div>
            <div className='row mt-5 p-5'>
                <div className='col-6 mt-5 text-center'>
                    <img src='media/images/acop-benefits.svg' alt='acop-img' className="mt-5" style={{width: "70%"}}/>
                    <h3 className='mt-4 text-muted'>Benefits of opening a TradeX account</h3>
                </div>
                <div className='col-6 text-muted'>
                    <h5>Unbeatable pricing</h5>
                    <p className='mb-5'>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                    <h5>Best investing experience</h5>
                    <p className='mb-5'>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
                    <h5>No spam or gimmicks</h5>
                    <p className='mb-5'>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                    <h5>The TradeX universe</h5>
                    <p className='mb-5'>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                </div>
            </div>
        </div>
     );
}

export default Benefit;