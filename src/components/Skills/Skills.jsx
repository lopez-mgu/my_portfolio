import React from 'react';
import { DiHtml5, DiCss3, DiReact, DiGithubBadge, DiResponsive, DiPython, DiNodejsSmall } from 'react-icons/di';
import { SiJavascript, SiJquery, SiFirebase, SiVisualstudio, SiBootstrap, SiMongodb } from 'react-icons/si';
import { FaGitAlt } from 'react-icons/fa';
import { GiGears } from 'react-icons/gi';
import { AiOutlineAreaChart } from 'react-icons/ai';
// AiOutlineHtml5 FaGitAlt GiGears SiBootstrap DiNodejsSmall
const Skills = () => {
  return (
    <>
        <section id="skills" className="skills section-bg">
            <div className="container">

                <div className="section-title">
                <h2>Skills &amp; Tools</h2>
                <p>The skills and products I use to bring your products to life:</p>
                </div>

                <div className="d-flex">
                    <div className="row skills-content justify-content-center">
                        <div className='d-flex flex-column align-items-center col col-md-2'>
                            <DiHtml5 className="icon"  size="2.8rem" color="#149ddd"/>
                            <p style={{fontSize: ".8rem"}} color="#050d18">HTML5</p>
                        </div>
                        <div className='d-flex flex-column align-items-center col col-md-2'>
                            <DiCss3 className="icon"  size="2.8rem" color="#149ddd"/>
                            <p style={{fontSize: ".8rem"}} color="#050d18">CSS3</p>
                        </div>
                        <div className='d-flex flex-column align-items-center col col-md-2'>
                            <SiJavascript className="icon"  size="2.8rem" color="#149ddd"/>
                            <p style={{fontSize: ".8rem"}} color="#050d18">JavaScript</p>
                        </div>
                        <div className='d-flex flex-column align-items-center col col-md-2'>
                            <DiPython className="icon"  size="2.8rem" color="#149ddd"/>
                            <p style={{fontSize: ".8rem"}} color="#050d18">Python</p>
                        </div>
                        <div className='d-flex flex-column align-items-center col col-md-2'>
                            <DiReact className="icon"  size="2.8rem" color="#149ddd"/>
                            <p style={{fontSize: ".8rem"}} color="#050d18">ReactJS</p>
                        </div>
                        <div className='d-flex flex-column align-items-center col col-md-2'>
                            <SiJquery className="icon"  size="2.8rem" color="#149ddd"/>
                            <p style={{fontSize: ".8rem"}} color="#050d18">JQuery</p>
                        </div>
                        <div className='d-flex flex-column align-items-center col col-md-2'>
                            <GiGears className="icon"  size="2.8rem" color="#149ddd"/>
                            <p style={{fontSize: ".8rem"}} color="#050d18">APIRESTful</p>
                        </div>
                        <div className='d-flex flex-column align-items-center col col-md-2'>
                            <FaGitAlt className="icon"  size="2.8rem" color="#149ddd"/>
                            <p style={{fontSize: ".8rem"}} color="#050d18">Git</p>
                        </div>
                        <div className='d-flex flex-column align-items-center col col-md-2'>
                            <DiGithubBadge className="icon"  size="2.8rem" color="#149ddd"/>
                            <p style={{fontSize: ".8rem"}} color="#050d18">GitHub</p>
                        </div>
                        <div className='d-flex flex-column align-items-center col col-md-2'>
                            <SiBootstrap className="icon"  size="2.8rem" color="#149ddd"/>
                            <p style={{fontSize: ".8rem"}} color="#050d18">BootStrap</p>
                        </div>
                        <div className='d-flex flex-column align-items-center col col-md-2'>
                            <DiResponsive className="icon"  size="2.8rem" color="#149ddd"/>
                            <p style={{fontSize: ".8rem"}} color="#050d18">Responsive</p>
                        </div>
                        <div className='d-flex flex-column align-items-center col col-md-2'>
                            <SiFirebase className="icon"  size="2.8rem" color="#149ddd"/>
                            <p style={{fontSize: ".8rem"}} color="#050d18">FireBase</p>
                        </div>
                        <div className='d-flex flex-column align-items-center col col-md-2'>
                            <SiMongodb className="icon"  size="2.8rem" color="#149ddd"/>
                            <p style={{fontSize: ".8rem"}} color="#050d18">MongoDB</p>
                        </div>
                        <div className='d-flex flex-column align-items-center col col-md-2'>
                            <SiVisualstudio className="icon"  size="2.8rem" color="#149ddd"/>
                            <p style={{fontSize: ".8rem"}} color="#050d18">VisualStudio</p>
                        </div>
                        <div className='d-flex flex-column align-items-center col col-md-2'>
                            <AiOutlineAreaChart className="icon"  size="2.8rem" color="#149ddd"/>
                            <p style={{fontSize: ".8rem"}} color="#050d18">ChartJS</p>
                        </div>
                        <div className='d-flex flex-column align-items-center col col-md-2'>
                            <DiNodejsSmall className="icon"  size="2.8rem" color="#149ddd"/>
                            <p style={{fontSize: ".8rem"}} color="#050d18">NodeJS</p>
                        </div>
                        
                    </div>
                </div>
 
            </div>
        </section>
    </>
  )
}

export default Skills