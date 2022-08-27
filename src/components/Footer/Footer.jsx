import React from 'react';
import './Footer.css';
import { DiHtml5, DiCss3, DiReact } from 'react-icons/di';
import { SiJavascript, SiBootstrap } from 'react-icons/si';


const Footer = () => {
  return (
    <>
        <footer id="footer">
            <div className="container">
            <div className="copyright">
                &copy; Copyright <strong><span>Miguel Gutierrez </span></strong>
            </div>
            <div className="credits">
                Designed and build using:
                <div>
                  <div className="d-flex justify-content-center">
                      <div className="row skills-content justify-content-center mt-4">
                          <div className='d-flex flex-column align-items-center col col-md-2'>
                              <DiHtml5 className="icon"  size="1.4rem" color="#149ddd"/>
                              <p style={{fontSize: ".5rem"}} color="#050d18">HTML5</p>
                          </div>
                          <div className='d-flex flex-column align-items-center col'>
                              <DiCss3 className="icon"  size="1.4rem" color="#149ddd"/>
                              <p style={{fontSize: ".5rem"}} color="#050d18">CSS3</p>
                          </div>
                          <div className='d-flex flex-column align-items-center col'>
                              <SiJavascript className="icon"  size="1.4rem" color="#149ddd"/>
                              <p style={{fontSize: ".5rem"}} color="#050d18">JavaScript</p>
                          </div>
                          <div className='d-flex flex-column align-items-center col'>
                              <DiReact className="icon"  size="1.4rem" color="#149ddd"/>
                              <p style={{fontSize: ".5rem"}} color="#050d18">React</p>
                          </div>
                          <div className='d-flex flex-column align-items-center col'>
                              <SiBootstrap className="icon"  size="1.4rem" color="#149ddd"/>
                              <p style={{fontSize: ".5rem"}} color="#050d18">BootStrap</p>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
            </div>
        </footer>
    </>
  )
}

export default Footer