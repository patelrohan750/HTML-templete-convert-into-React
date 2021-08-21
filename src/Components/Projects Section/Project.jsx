import React from 'react'

const Project = ({ imagename, projectname, field }) => {
    return (
        <div className='project_slider_item'>
            <div className="portfolio-item">
                <div className="thumb">
                    <img src={`/images/${imagename}.jpg`} alt="" />
                    <div className="hover-content">
                        <div className="inner-content">
                            <a href="#"><h4>{projectname}</h4></a>
                            <span>{field}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Project
