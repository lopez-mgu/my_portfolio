import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <>
        <section id="resume" className="resume">
            <div className="container">

                <div className="section-title">
                <h2>Resume</h2>
                {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                </div>

                <div className="row">
                <div className="col-lg-6" data-aos="fade-up">
                    <h3 className="resume-title">Sumary</h3>
                    <div className="resume-item pb-0">
                    <h4>Miguel Gutierrez</h4>
                    <p><em>Innovative and deadline-driven web developer and automation engineer with 3+ years of experience designing and developing automation processes, currently working with web development projects as 
                        freelance and developing automation tools for a manufacturing company.</em></p>
                    <ul>
                        <li>Chihuahua, Mexico</li>
                        <li>+52 627 520 8753
                        </li>
                        <li>lopez.mgu@gmail.com</li>
                    </ul>
                    </div>
                    <h3 className="resume-title">Education</h3>
                    <div className="resume-item">
                    <h4>Master in Computer Engineering</h4>
                    <h5>2022 - Present</h5>
                    <p><em>Universidad Autonoma de Chihuahua (UACH)</em></p>
                    <p>Mastership in Computer Engineering with specialization in Data Intelligence.</p>
                    </div>
                    <div className="resume-item">
                    <h4>Course in Full Stack Web Developer</h4>
                    <h5>FEB 2022 - AUG 2022</h5>
                    <p><em>UCAMP by UTEL</em></p>
                    <p>Full Stack course developing projects using front-end and back-end technologies powered by JavaScript.</p>
                    </div>
                    <div className="resume-item">
                    <h4>Bachelor of Mechatronics Engineering</h4>
                    <h5>2013 - 2018</h5>
                    <p><em>Instituto Tecnologico de Parral</em></p>
                    <p>Engineering in Mechatronics with specialization in Automation.</p>
                    </div>
                </div>
                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="resume-title">Professional Experience</h3>
                    <div className="resume-item">
                    <h4>Senior Resources Enterprise Planning SME</h4>
                    <h5>2021 - Present</h5>
                    <p><em>JABIL, Chihuahua</em></p>
                    <ul>
                        <li>Developed numerous tools using VisualBasic connected to SAP to automate repetitive tasks.</li>
                        <li>Enhancement of existing processes by creating reports and tools that impacts directly on time execution.</li>
                        <li>Lead documents control area to assure ISO norm is correctly followed.</li>
                        <li>Delegate tasks to the members of document control and purchasing team and provide counsel on all aspects of the project. </li>
                        <li>Supervise the correct execution of daily tasks in order to ensure quality and execution in time.</li>
                    </ul>
                    </div>
                    <div className="resume-item">
                    <h4>Programming Engineer</h4>
                    <h5>2019 - 2021</h5>
                    <p><em>Autronic Control, Chihuahua</em></p>
                    <ul>
                        <li>Creation of PLC and HMI library for control systems of mining plants.</li>
                        <li>Dveloped of control systems for automotive, food and minning industry.</li>
                        <li>Support to in the integration of Industrial Robots.</li>
                        <li>Configuration, commissioning and start-up of Ethernet, DeviceNet and ControlNet networks and devices.</li>
                        <li>Recommended and consulted with clients on the most appropriate control strategic and graphic interface for the process to automate.</li>
                        <li>Server Management, Virtualization(VMWare),and Stratix Managed  Switches Configuration.</li>
                    </ul>
                    </div>
                </div>
                </div>

            </div>
        </section>
    </>
  )
}

export default Resume