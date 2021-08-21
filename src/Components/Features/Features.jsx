import React from 'react'
import './Features.css'
import FeaturesContent from './FeaturesContent'
import FeaturesSkill from './FeaturesSkill'
const Features = () => {
    return (
        <React.Fragment>
        <div className='features section' id='features'>
        <div className="container">
        <div className="row">
            <FeaturesContent/>
            <FeaturesSkill/>

        </div>
        </div>

        </div>
            
        </React.Fragment>
    )
}

export default Features
