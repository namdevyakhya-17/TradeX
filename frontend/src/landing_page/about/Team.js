import React from 'react';

function Team() {
    return (
        <div className='container'>
            <div className='row p-5'>
                <h1 className='text-center'>People</h1>
            </div>
            <div className='row text-muted fs-6' style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
                <div className='col-6 px-3 py-4 text-center'>
                    <img src='media/images/CEO.jpg' alt='CEO-img' style={{ borderRadius: "100%", width: "55%" }}></img>
                    <h4 className='mt-3'>Vyakhya Namdev</h4>
                    <p>Founder, CEO</p>
                </div>
                <div className='col-6 px-3 py-4'>
                    <p>
                        Vyakhya Namdev founded TradeX in 2025 with the vision to innovate the Indian broking industry by offering user-friendly and accessible trading solutions for everyone. TradeX is dedicated to empowering traders and investors by simplifying market participation and bringing transparency to the trading experience.
                    </p>
                    <p>
                        Vyakhya is committed to contributing to the growth and development of financial markets and balances her focus on TradeX with a passion for basketball, which helps her maintain a clear and focused mindset.
                    </p>
                    <p>
                        Connect on{' '}
                        <a href='mailto:namdevyakhya2005@gmail.com' className='link-deco'>Email</a> /{' '}
                        <a href='tel:+919528441642' className='link-deco'>Contact</a> /{' '}
                        <a href='https://www.linkedin.com/in/vyakhyanamdev/' target='_blank' rel='noopener noreferrer' className='link-deco'>LinkedIn</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;