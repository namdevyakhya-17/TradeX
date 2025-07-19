import React from 'react';

function Hero() {
    return (
        <div className='container mb-5'>
            <div className='row p-5 mt-4 text-center'>
                <h1 className='fs-3'>Open a free demat and trading account online</h1>
                <h5 className='mt-3 text-muted'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h5>
            </div>
            <div className='row mb-5'>
                <div className='col-1'></div>
                <div className='col-5'>
                    <img src='media/images/account_open.svg' alt='Signup-img' />
                </div>
                <div className='col-6 mt-5'>
                    <h4>Signup Now</h4>
                    <p className='text-muted'>or track your existing application</p>
                    <div class="input-group mb-3" style={{width: "320px"}}>
                        <span class="input-group-text" id="basic-addon1">+91</span>
                        <input type="tel" class="form-control" placeholder="Enter your mobile number" aria-label="Phone number" aria-describedby="basic-addon1"/>
                    </div>
                    <button type="button" class="btn btn-primary" style={{width: "50%"}}>SignUp</button>
                    <p className='mt-4 fs-8'>By proceeding, you agree to the TradeX <a href='' style={{textDecoration: "none"}}>terms</a> & <a href='' style={{textDecoration: "none"}}>privacy policy</a></p>
                </div>
            </div>
        </div>
    );
}

export default Hero;