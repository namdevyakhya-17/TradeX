import React from 'react';

function Footer() {
    return (
        <footer style={{ backgroundColor: "rgb(250, 250, 25 0)" }}>
            <div className='container border-top mt-5'>
                <div className='row'>
                    <div className='col'>
                        <img src='media/images/logo_tradex_large.png' style={{ width: "50%" }} />
                        <p>©2025, TradeX Broking Ltd.
                            All rights reserved.</p>
                    </div>
                    <div className='col'>
                        <h6>Account</h6>
                        <a href='' className='link-deco'>Open demat account</a><br />
                        <a href='' className='link-deco'>Minor demat account</a><br />
                        <a href='' className='link-deco'>NRI demat account</a><br />
                        <a href='' className='link-deco'>Commodity</a><br />
                        <a href='' className='link-deco'>Dematerialisation</a><br />
                        <a href='' className='link-deco'>Fund transfer</a><br />
                        <a href='' className='link-deco'>MTF</a><br />
                        <a href=''className='link-deco' >Referral program</a><br />
                    </div>
                    <div className='col'>
                        <h6>Support</h6>
                        <a href='' className='link-deco'>Contact us</a><br />
                        <a href='' className='link-deco'>Support portal</a><br />
                        <a href='' className='link-deco'>How to file a complaint?</a><br />
                        <a href='' className='link-deco'>Status of your complaints</a><br />
                        <a href='' className='link-deco'>Bulletin</a><br />
                        <a href='' className='link-deco'>Circular</a><br />
                        <a href='' className='link-deco'>Z-Connect blog</a><br />
                        <a href='' className='link-deco'>Downloads</a><br />
                    </div>
                    <div className='col'>
                        <h6>Company</h6>
                        <a href='' className='link-deco'>About</a><br />
                        <a href='' className='link-deco'>Philosophy</a><br />
                        <a href='' className='link-deco'>Press & media</a><br />
                        <a href='' className='link-deco'>Careers</a><br />
                        <a href='' className='link-deco'>TradeX Cares (CSR)</a><br />
                        <a href='' className='link-deco'>TradeX.tech</a><br />
                        <a href='' className='link-deco'>Open source</a><br />
                    </div>
                    <div className='col'>
                        <h6>Quick Links</h6>
                        <a href='' className='link-deco'>Upcoming IPOs</a><br />
                        <a href='' className='link-deco'>Brokerage charges</a><br />
                        <a href='' className='link-deco'>Market holidays</a><br />
                        <a href='' className='link-deco'>Economic calendar</a><br />
                        <a href='' className='link-deco'>Calculators</a><br />
                        <a href='' className='link-deco'>Markets</a><br />
                        <a href='' className='link-deco'>Sectors</a><br />
                    </div>
                </div>
                <div className='mt-5 text- muted' style={{ fontSize: "12px" }}>

                    <p>TradeX Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through TradeX Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through TradeX Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: TradeX Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@tradex.com, for DP related to dp@tradex.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p> <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p> <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p> <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p> <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p> <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of TradeX and offering such services, please create a ticket here.</p>
                </div>
                <div className='my-2 text- muted' style={{textAlign:"center", fontSize: "12px" }}>
                    <a href='' className='link-deco' style={{ marginRight: '1rem', color: "rgb(150, 150, 150)"}}>NSE</a>
                    <a href='' className='link-deco' style={{ marginRight: '1rem', color: "rgb(150, 150, 150)" }}>BSE</a>
                    <a href='' className='link-deco' style={{ marginRight: '1rem', color: "rgb(150, 150, 150)" }}>MCX</a>
                    <a href='' className='link-deco' style={{ marginRight: '1rem', color: "rgb(150, 150, 150)" }}>Terms & Conditions</a>
                    <a href='' className='link-deco' style={{ marginRight: '1rem', color: "rgb(150, 150, 150)" }}>Policies & Procedures</a>
                    <a href='' className='link-deco' style={{ marginRight: '1rem', color: "rgb(150, 150, 150)" }}>Privacy Policy</a>
                    <a href='' className='link-deco' style={{ marginRight: '1rem', color: "rgb(150, 150, 150)" }}>Disclosure</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;