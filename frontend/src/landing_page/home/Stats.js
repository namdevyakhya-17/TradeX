import React from 'react';

function Stats() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className='row'>
                <div className='col-5'>
                    <h2 className='mb-5'>Trust with confidence</h2>
                    <h4>Customer-first always</h4>
                    <p className='mb-4'>That's why 1.6+ crore customers trust TradeX with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    <h4>No spam or gimmicks</h4>
                    <p className='mb-4'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    <h4>The TradeX universe</h4>
                    <p className='mb-4'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h4>Do better with money</h4>
                    <p className='mb-4'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-7'>
                    <img src='media/images/ecosystem.png' alt='ecosystem-img' style={{width: "95%"}}></img>
                    <div className='text-center'>
                        <a href='' className='mx-4' style={{textDecoration: "none"}}>Explore our products<i class="fa-solid fa-arrow-right"></i></a>
                        <a href='' style={{textDecoration: "none"}}>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className='row p-5'>
                <img src='media\images\pressLogos.png' alt='press-logo' style={{width: "70%"}} className="mx-auto d-block"></img>
            </div>
        </div>
     );
}

export default Stats;