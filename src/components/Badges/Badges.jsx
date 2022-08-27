import React, { useEffect } from 'react';
import './Badges.css';

const Badges = () => {

    useEffect(() => {
        const script = document.createElement('script');
    //    <script type="text/javascript" async src="//cdn.credly.com/assets/utilities/embed.js"></script>
        script.src = "//cdn.credly.com/assets/utilities/embed.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);

  return (
    <>
        <section id="facts" className="facts">
            <div className="container">
                
                <div className="section-title">
                    <h2>Badges</h2>
                    <p>Below you will find badges adquired.</p>
                </div>
                <div className='d-flex'>
                    <div className="row w-100">

                        <div className="col w-25 p-3" data-aos="fade-up" data-aos-delay="300">
                            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="75e9b083-1fd9-4326-a03e-39c34d672a49" data-share-badge-host="https://www.credly.com"></div>
                        </div>

                        <div className="col w-25 p-3" data-aos="fade-up" data-aos-delay="200">
                            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="7e74e6c0-4f2b-4c57-a9ea-6763523b6208" data-share-badge-host="https://www.credly.com"></div>
                        </div>

                        <div className="col w-25 p-3" data-aos="fade-up" data-aos-delay="100">
                            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="bb6504e3-921e-4ffe-b460-78b55821897c" data-share-badge-host="https://www.credly.com"></div>
                        </div>

                        <div className="col w-25 p-3" data-aos="fade-up" data-aos-delay="400">
                            <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="3476b5ad-ba46-40ba-af37-d2a8eb85f719" data-share-badge-host="https://www.credly.com"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Badges