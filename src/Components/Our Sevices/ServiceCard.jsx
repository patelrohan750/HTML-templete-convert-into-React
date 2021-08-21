import React from 'react'

const ServiceCard = ({imgname,servicename,message}) => {
    return (
        <div className="col-lg-4">
        <div className="service-item wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          <div className="row">
            <div className="col-lg-4">
              <div className="icon">
                <img src={`/images/${imgname}.png`} alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="right-content">
                <h4>{servicename}</h4>
                <p>{message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ServiceCard
