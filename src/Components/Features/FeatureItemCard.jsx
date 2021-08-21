import React from 'react'

const FeatureItemCard = ({number,featurename,message,delayTime}) => {
    const selectClass=()=>{
        let selcetClassName=''
        if(number==='01') selcetClassName='first-number'
        else if(number==='02') selcetClassName='second-number'
        else if(number==='03') selcetClassName='third-number'
        else if(number==='04') selcetClassName='fourth-number'
        else selcetClassName=''

        return selcetClassName
    }
    return (
        <div className="col-lg-3">
            <div className="features-item first-feature wow fadeInUp" data-wow-duration="1s" data-wow-delay={delayTime}>
                <div className={`${selectClass()} number`}>
                    <h6>{number}</h6>
                </div>
                <div className="icon"></div>
                <h4>{featurename}</h4>
                <div className="line-dec"></div>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default FeatureItemCard
