import React, { useEffect, useState } from 'react';
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub, AiOutlineHome,
        AiOutlineUser, AiOutlineFile, AiOutlineBook, AiOutlineCloudServer, AiOutlineMail } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navbar.css';

const Nabvar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const NavClassMobile = 'mobile-nav-active'
    const [ navClass, setNavClass ] = useState('');
    console.log(navClass)
  return (
    <>
        {/* ======= Mobile nav toggle button ======= */}
        <div className={`mobile-nav-toggle d-xl-none icon ${navClass}`}>
            <GiHamburgerMenu onClick={() => {navClass === NavClassMobile?setNavClass(''):setNavClass(NavClassMobile)}} size="1.8rem" color="white"/>
        </div>

        {/* ======= Header ======= */}
        <header id="header">
            <div className="d-flex flex-column">

            <div className="profile">
                <img src="Images/profile-photo.jpg" alt="" className="img-fluid rounded-circle" />
                <h1 className="text-light"><a href="index.html">Miguel Gutierrez</a></h1>
                <div className="social-links mt-3 text-center">
                <a href="https://twitter.com/lopezmgudev" className="twitter"><AiOutlineTwitter className='icon'/></a>
                <a href="https://www.linkedin.com/in/miguel-angel-gutierrez-lopez-384116175/" className="linkedin"><AiOutlineLinkedin className='icon'/></a>
                <a href="https://github.com/lopez-mgu" className="GitHub"><AiOutlineGithub className='icon'/></a>
                {/* <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a> */}
                </div>
            </div>

            <nav id="navbar" className="nav-menu navbar">
                <ul>
                    <li><a href="#hero" className="nav-link scrollto"><AiOutlineHome className='icon'/><span>Home</span></a></li>
                    <li><a href="#about" className="nav-link scrollto"><AiOutlineUser className='icon'/> <span>About</span></a></li>
                    <li><a href="#resume" className="nav-link scrollto"><AiOutlineFile className='icon'/> <span>Resume</span></a></li>
                    <li><a href="#portfolio" className="nav-link scrollto"><AiOutlineBook className='icon'/> <span>Portfolio</span></a></li>
                    {/* <li><a href="#services" className="nav-link scrollto"><AiOutlineCloudServer className='icon'/> <span>Services</span></a></li> */}
                    <li><a href="#contact" className="nav-link scrollto"><AiOutlineMail className='icon'/> <span>Contact</span></a></li>
                </ul>
            </nav>
            </div>
        </header>
    </>
  )
}

export default Nabvar