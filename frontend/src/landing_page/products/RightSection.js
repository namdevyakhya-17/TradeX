import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-5 p-5 mt-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={learnMore} className='link-deco'>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className='col-7 p-5'>
                    <img src={imageURL}></img>
                </div>
            </div>
        </div>
     );
}
export default RightSection;