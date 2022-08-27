import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
        <section id="about" className="about">
        <div className="container">

            <div className="section-title">
            <h2>About</h2>
            <p>Full stack developer and Mechatronics Engineer with strong engineering background and experience working with front-end and back-end web development projects, 
                automation projects such as design and development of control systems for manufacturing processes, instrumentation, PLCs-HMIs programming (Siemens, 
                Rockwell, Omron, Schneider and Mitsubishi) and Industrial Robots commissionning.</p>
            </div>

            <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
                <img src="Images/profile-photo.jpg" className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>Web Developer &amp; Mechatronics Engineer.</h3>
                <p className="fst-italic">
                Currently studying mastership in Data Intelligence.
                </p>
                <div className="row">
                <div className="col-lg-6">
                    <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>17 Nov 1995</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>Coming Soon</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+52 627 520 8753</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Chihuahua, Mexico</span></li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>26</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor of Engineering</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>lopez.mgu@gmail.com</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                    </ul>
                </div>
                </div>
                {/* <p>
                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                </p> */}
            </div>
            </div>

        </div>
        </section>
    </>
  )
}

export default About