import React from 'react'
import SkillCard from './SkillCard'
const FeaturesSkill = () => {
    return (
        <React.Fragment>
            <div className="col-lg-12">

                <div className="skills-content">
                    <div className="row">
                    <SkillCard per='80%' tech='HTML/CSS/JS' delayTime='0s' />
                    <SkillCard per='60%' tech='Wordpress' delayTime='0.2s' />
                    <SkillCard per='90%' tech='Marketing' delayTime='0.4s' /> 
                    <SkillCard per='70%' tech='Photoshop' delayTime='0.6s' /> 
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default FeaturesSkill
