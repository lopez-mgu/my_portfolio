import React from 'react';
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub, AiOutlineHome,
        AiOutlineUser, AiOutlineFile, AiOutlineBook, AiOutlineCloudServer, AiOutlineMail } from 'react-icons/ai';

import './Navbar.css';

const Nabvar = () => {
  return (
    <>
        {/* ======= Mobile nav toggle button ======= */}
        <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

        {/* ======= Header ======= */}
        <header id="header">
            <div className="d-flex flex-column">

            <div className="profile">
                <img src="Images/profile-photo.jpg" alt="" className="img-fluid rounded-circle" />
                <h1 className="text-light"><a href="index.html">Miguel Gutierrez</a></h1>
                <div className="social-links mt-3 text-center">
                <a href="#" className="twitter"><AiOutlineTwitter/></a>
                <a href="#" className="facebook"><AiOutlineLinkedin/></a>
                <a href="#" className="instagram"><AiOutlineGithub/></a>
                {/* <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a> */}
                </div>
            </div>

            <nav id="navbar" className="nav-menu navbar">
                <ul>
                    <li><a href="#hero" className="nav-link scrollto"><AiOutlineHome/><span>Home</span></a></li>
                    <li><a href="#about" className="nav-link scrollto"><AiOutlineUser/> <span>About</span></a></li>
                    <li><a href="#resume" className="nav-link scrollto"><AiOutlineFile/> <span>Resume</span></a></li>
                    <li><a href="#portfolio" className="nav-link scrollto"><AiOutlineBook/> <span>Portfolio</span></a></li>
                    <li><a href="#services" className="nav-link scrollto"><AiOutlineCloudServer/> <span>Services</span></a></li>
                    <li><a href="#contact" className="nav-link scrollto"><AiOutlineMail/> <span>Contact</span></a></li>
                </ul>
            </nav>
            </div>
        </header>
    </>
  )
}

export default Nabvar