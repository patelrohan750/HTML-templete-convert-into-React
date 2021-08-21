import React from 'react'
import FeatureItemCard from './FeatureItemCard'

const FeaturesContent = () => {
    return (
        <React.Fragment>
        <div className="col-lg-12">
          <div className="features-content">
            <div className="row">
            <FeatureItemCard number='01' featurename='Reach Out' message='This HTML5 template is based on Bootstrap 5 CSS. You are free to customize anything.'
            delayTime='0s'
             />

            <FeatureItemCard number='02' featurename='Develop a Strategy' message='TLorem ipsum dolor sit ameter consectetur adipiscing li elit sed do eiusmod.'
            delayTime='0.2s'
             />

            <FeatureItemCard number='03' featurename='Implementation' message='If this template is useful for your website, please consider to support us a little.'
            delayTime='0.4s'
             />

            <FeatureItemCard number='04' featurename='Analyze the result' message='Below circular progress bar animation supports those CSS values 10, 20, 30, till 100.'
            delayTime='0.6s'
             />
            

          
            </div>
          </div>
        </div>
            
        </React.Fragment>
    )
}

export default FeaturesContent
