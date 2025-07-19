import React from 'react';

function SupportNav() {
    return (
        <div className='container-fluid bg-light'>
            <div className='row mx-5'>
                <div className='col-10 mt-5'>
                    <a href='' className='text-muted fs-2 mt-4' style={{ textDecoration: "none" }}><h1>Support Portal</h1></a>
                </div>
                <div className='col-2 mt-5'>
                    <button type="button" class="btn btn-primary"><i class="fa-solid fa-bullseye"></i> My tickets</button>
                </div>
            </div>
            <div className='row mx-5'>
                <form class="d-flex mt-3 mb-5" role="search">
                    <input class="form-control me-2 text-muted" type="search" placeholder="🔍 Eg: how do I activate F&O..." aria-label="Search" style={{lineHeight: 2.5}}/>
                </form>
            </div>
        </div>
    );
}

export default SupportNav;