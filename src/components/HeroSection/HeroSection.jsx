import React, { useEffect, useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
    const mySkills = ["Developer", "Freelancer", "Automation Engineer", "Mechatronics Engineer"];
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    
    useEffect(() => {
        const id = setTimeout(
          () => setCurrentItemIndex((currentItemIndex + 1) % mySkills.length),
          2000
        );
        return () => {
          clearInterval(id); // removes React warning when gets unmounted
        };
      }, [currentItemIndex]);

    return (
        <>
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container" data-aos="fade-in">
                <h1>Miguel Gutierrez</h1>
                <p>I'm <span className="typed">{mySkills[currentItemIndex]}</span></p>
                </div>
            </section>
        </>
     );
}

export default HeroSection;