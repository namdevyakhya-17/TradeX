import React from 'react';

function AccountType() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center'>
                <h3>Explore different account types</h3>
            </div>
            <div className='row justify-content-center mb-5'>
                <div className='col-3 p-3 mt-5 border me-3'>
                    <h4 className='fs-5'><i class="fa-solid fa-users"></i> HUF Account</h4>
                    <p className='mt-4'>Make tax-effcient investments for your family</p>
                </div>
                <div className='col-3 p-3 mt-5 border me-3'>
                    <h4 className='fs-5'><i class="fa-solid fa-circle-user"></i> Individual Account</h4>
                    <p className='mt-2'>Invest in equity, mutual funds and derivatives</p>
                </div>
                <div className='col-3 p-3 mt-5 border me-3'>
                    <h4 className='fs-5'><i class="fa-solid fa-globe"></i> NRI Account</h4>
                    <p className='mt-2'>Invest in equity, mutual funds, debentures and more</p>
                </div>
                <div className='col-3 p-3 mt-5 border me-3'>
                    <h4 className='fs-5'><i class="fa-solid fa-user-tie"></i> Minor Account</h4>
                    <p className='mt-2'>Teach your little ones about money & inest for their future with them</p>
                </div>
                <div className='col-3 p-3 mt-5 border me-3'>
                    <h4 className='fs-5'><i class="fa-solid fa-building"></i> Corporate / Partnership / LLP</h4>
                    <p className='mt-2'>Manage your business surplus and investments easily</p>
                </div>
            </div>
        </div>
     );
}

export default AccountType;