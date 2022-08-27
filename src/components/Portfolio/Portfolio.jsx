import React from 'react';
import { Card } from 'react-bootstrap';
import './Portfolio.css';
import { DiHtml5, DiCss3, DiReact, DiGithubBadge, DiResponsive } from 'react-icons/di';
import { SiJavascript, SiJquery, SiFirebase, SiVisualstudio, SiBootstrap, SiMongodb } from 'react-icons/si';
import { BsPaypal } from 'react-icons/bs';
import { GiGears } from 'react-icons/gi';
import { MdStorage } from 'react-icons/md';
import { AiOutlineAreaChart } from 'react-icons/ai';




const Portfolio = () => {
    const P1_Url = 'https://lopez-mgu.github.io/LandingPage01/?classId=b08433a6-76d4-4fa5-9a16-273baa5ef14b&assignmentId=d853b31b-4f87-4cbd-9ede-54475c645200&submissionId=d23df80a-f9d2-e1f9-1d85-f013bc1bf530';
    const P2_Url = 'https://lopez-mgu.github.io/CRUD_Application/?classId=b08433a6-76d4-4fa5-9a16-273baa5ef14b&assignmentId=77f32d26-d1ff-4135-b22a-184253fdd18b&submissionId=c3abf672-a2eb-4068-cf71-ebfc03787d38';
    const P3_Url = 'https://ucamp-fullstack-equipo07.github.io/BOOT-M2-SEM13-PROY3/content/seccionGrafica.html';
    const P4_Url = 'https://62ae7192e39add611098307e--cocktail-avenue-app.netlify.app/?classId=b08433a6-76d4-4fa5-9a16-273baa5ef14b&assignmentId=fec4a797-f146-4219-b63f-ddf4042ad552&submissionId=2be4cb14-7003-e2c1-f2d2-997ec1411554';
    const P5_Url = 'https://keen-dolphin-460eda.netlify.app/';

    return (
    <>
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">

                <div className="section-title">
                <h2>Portfolio</h2>
                <p>Dig into some of my live demo projects.</p>
                </div>

                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                    <div className="col-md-6 portfolio-item">
                        <Card bg="white">
                            <Card.Img variant="top" className='img-thumbnail' src="Images/P1_Landing_Sales.png" />
                            <Card.Body>
                            <Card.Text>
                                <p color="#050d18">Build Using:</p>
                                <div className='d-flex'>
                                    <div className='row'>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <DiHtml5 className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">HTML5</p>
                                        </div>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <DiCss3 className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">CSS3</p>
                                        </div>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <SiJavascript className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">JavaScript</p>
                                        </div>
                                    </div>
                                </div>
                                <Card.Link href={P1_Url}>Go to Live Demo</Card.Link>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-6 portfolio-item">
                        <Card>
                            <Card.Img variant="top" src="Images/P2_CRUD.png" />
                            <Card.Body>
                            <Card.Text>
                                <p color="#050d18">Build Using:</p>
                                <div className='d-flex'>
                                    <div className='row'>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <DiHtml5 className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">HTML5</p>
                                        </div>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <DiCss3 className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">CSS3</p>
                                        </div>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <SiJavascript className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">JavaScript</p>
                                        </div>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <MdStorage className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">LocalStorage</p>
                                        </div>
                                    </div>
                                </div>
                                <Card.Link href={P2_Url}>Go to Live Demo</Card.Link>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-6 portfolio-item">
                        <Card>
                            <Card.Img variant="top" src="Images/P3_DashBoard.png" />
                            <Card.Body>
                            <Card.Text>
                                <p color="#050d18">Build Using:</p>
                                <div className='d-flex'>
                                    <div className='row'>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <DiHtml5 className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">HTML5</p>
                                        </div>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <DiCss3 className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">CSS3</p>
                                        </div>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <SiJavascript className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">JavaScript</p>
                                        </div>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <GiGears className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">APIREST</p>
                                        </div>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <AiOutlineAreaChart className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">CHARTJS</p>
                                        </div>
                                    </div>
                                </div>
                                <Card.Link href={P3_Url}>Go to Live Demo</Card.Link>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-6 portfolio-item">
                        <Card>
                            <Card.Img variant="top" src="Images/P4_Restaurant_APP.png" />
                            <Card.Body>
                            <Card.Text>
                                <p color="#050d18">Build Using:</p>
                                <div className='d-flex'>
                                    <div className='row'>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <DiHtml5 className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">HTML5</p>
                                        </div>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <DiCss3 className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">CSS3</p>
                                        </div>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <SiJavascript className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">JavaScript</p>
                                        </div>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <DiReact className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">React</p>
                                        </div>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <SiBootstrap className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">BootStrap</p>
                                        </div>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <SiFirebase className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">FireBase</p>
                                        </div>
                                        
                                    </div>
                                </div>
                                <Card.Link href={P4_Url}>Go to Live Demo</Card.Link>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-md-6 portfolio-item">
                        <Card>
                            <Card.Img variant="top" src="Images/P5_ECommerce.png" />
                            <Card.Body>
                            <Card.Text>
                                <p color="#050d18">Build Using:</p>
                                <div className='d-flex'>
                                    <div className='row'>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <DiHtml5 className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">HTML5</p>
                                        </div>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <DiCss3 className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">CSS3</p>
                                        </div>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <SiJavascript className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">JavaScript</p>
                                        </div>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <DiReact className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">React</p>
                                        </div>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <SiBootstrap className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">BootStrap</p>
                                        </div>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <SiMongodb className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">MongoDB</p>
                                        </div>
                                        <div className='d-flex flex-column align-items-center col'>
                                            <BsPaypal className="icon"  size="1.8rem" color="#149ddd"/>
                                            <p style={{fontSize: ".8rem"}} color="#050d18">PayPal</p>
                                        </div>

                                        
                                    </div>
                                </div>
                                <Card.Link href={P5_Url}>Go to Live Demo</Card.Link>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                </div>

            </div>
        </section>
    </>
  )
}

export default Portfolio