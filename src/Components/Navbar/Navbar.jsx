import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='container'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary mt-2">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" style={{textDecoration:"none", fontSize:"20px"}} className='d-flex align-items-center gap-1'><img src="logo.png" alt="" /> <span className='fw-bold' style={{color:"green"}}>WeCare</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item me-4">
                               <a class="nav-link a text-info" aria-current="page" href="#">Featured</a>
                            </li>
                            <li class="nav-item me-4">
                               <a class="nav-link a" href="#">About Us</a>
                            </li>
                            <li class="nav-item me-4">
                               <a class="nav-link a" href=''>Facilities</a>
                            </li>
                            <li class="nav-item me-4">
                               <a class="nav-link a" href=''>Find Doctor</a>
                            </li>
                            <li class="nav-item me-4">
                               <a class="nav-link a" href=''>Contact</a>
                            </li>
                            <button className='btn btn-info px-4 py-2 me-4' style={{color:"whitesmoke", fontWeight:"600", fontSize:"14px", borderRadius:"5px"}}>Book Now</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;