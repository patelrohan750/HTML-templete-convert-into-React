import React from 'react'
import './Projects.css'
import ProjectSlider from './ProjectSlider'
const Projects = () => {
    return (
        <React.Fragment>
            <div id="portfolio" className="our-portfolio section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-heading wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
                                <h6>Our Portofolio</h6>
                                <h2>Discover Our Recent <em>Projects</em> And <span>Showcases</span></h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <ProjectSlider/>
                        </div>

                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Projects
