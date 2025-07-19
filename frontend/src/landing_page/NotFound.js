import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center '>
                <h1 className='fs-2'>404 Not Found</h1>
                <p>Sorry, the page you are looking for does not exists.</p>
                <Link to={"/"}>
                <button className='p-2 btn btn-primary mt-3 mb-5' style={{width: "20%", margin: "0 auto"}}>Home</button></Link>
            </div>
        </div>
     );
}

export default NotFound;