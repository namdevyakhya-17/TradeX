import React from 'react';

function Charges() {
    return (
        <div>
            <div className="container p-5">
                <h2 className="text-muted fs-3 mb-4">Charges for account opening</h2>
                <table className="table table-bordered text-muted fs-6">
                    <thead>
                        <tr>
                            <td>Type of account</td>
                            <td>Charges</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Online account</td>
                            <td>
                                <span className="badge bg-success">FREE</span>
                            </td>
                        </tr>
                        <tr className="table-light">
                            <td>Offline account</td>
                            <td>
                                <span className="badge bg-success">FREE</span>
                            </td>
                        </tr>
                        <tr>
                            <td>NRI account (offline only)</td>
                            <td>₹ 500</td>
                        </tr>
                        <tr className="table-light">
                            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                            <td>₹ 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        {/* // Second Charge Table */}
            <div className="container p-5">
                <h2 className="text-muted fs-3 mb-4">Charges for optional value added services</h2>
                <table className="table table-bordered text-muted fs-6">
                    <thead>
                        <tr>
                            <td>Service</td>
                            <td>Billing Frquency</td>
                            <td>Charges</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tickertape</td>
                            <td>Monthly / Annual</td>
                            <td>Free: 0 | Pro: 249/2399</td>
                        </tr>
                        <tr className="table-light">
                            <td>Smallcase</td>
                            <td>Per transaction</td>
                            <td>Buy & Invest More: 100 | SIP: 10</td>
                        </tr>
                        <tr>
                            <td>Kite Connect</td>
                            <td>Monthly</td>
                            <td>Connect: 500 | Historical: 500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Charges;
