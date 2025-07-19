import React from 'react';

function InvestmentOptions() {
    return (
        <div className='container'>
            <div className='row mt-5 p-5 text-center'>
                <h3 className='text-muted'>Investment options with TradeX demat account</h3>
            </div>
            <div className="row">
                <div className='col-1'></div>
                <div className="col-5 p-5 d-flex align-items-center">
                    <img src="media/images/stocks-acop.svg" alt="stock-img" className="img-fluid mr-3"/>
                    <div>
                        <h5>Stocks</h5>
                        <p className="text-muted">Invest in all exchange-listed securities</p>
                    </div>
                </div>
                <div className='col-1'></div>
                <div className="col-5 d-flex align-items-center">
                    <img src="media/images/mf-acop.svg" alt="stock-img" className="img-fluid mr-3"/>
                    <div>
                        <h5>Mutual funds</h5>
                        <p className="text-muted">Invest in commission-free direct mutual funds</p>
                    </div>
                </div>
                <div className='col-1'></div>
                <div className="col-5 d-flex align-items-center">
                    <img src="media/images/ipo-acop.svg" alt="stock-img" className="img-fluid mr-3"/>
                    <div>
                        <h5>IPO</h5>
                        <p className="text-muted">Apply to the latest IPOs instantly via UPI</p>
                    </div>
                </div>
                <div className='col-1'></div>
                <div className="col-5 d-flex align-items-center">
                    <img src="media/images/fo-acop.svg" alt="stock-img" className="img-fluid mr-3"/>
                    <div>
                        <h5>Future & Options</h5>
                        <p className="text-muted">Hedge and mitigate market risk through simplified F&O trading</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default InvestmentOptions;