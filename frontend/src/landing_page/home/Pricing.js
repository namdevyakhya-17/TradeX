import React from 'react';

function Pricing() {
    return (
        <div className='container p-5 s-5'>
            <div className='row'>
                <div className='col-5'>
                    <h2 className='mb-4'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration: "none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                
                <div className="col-7 mb-5">
                    <div className='row'>
                        <div className='col'>
                            <img src='media/images/pricingEquity.svg' alt='img'/>
                            <div className="small">Free account<br />opening</div>
                        </div>
                        <div className='col'>
                            <img src='media/images/pricingEquity.svg' alt='img' />
                            <div className="small">Free equity delivery<br />and direct mutual funds</div>
                        </div>
                        <div className='col'>
                            <img src='media/images/other-trades.svg' alt='img' />
                            <div className="small">Intraday and<br />F&amp;O</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;