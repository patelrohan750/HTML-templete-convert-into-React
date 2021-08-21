import React from 'react'

const SkillCard = ({per,tech,delayTime}) => {
    return (
        <div className="col-lg-3">
            <div className="skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay={delayTime}>
                <div className="progress" data-percentage="80">
                    <span className="progress-left">
                        <span className="progress-bar"></span>
                    </span>
                    <span className="progress-right">
                        <span className="progress-bar"></span>
                    </span>
                    <div className="progress-value">
                        <div>
                            {per}<br />
                            <span>{tech}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillCard
