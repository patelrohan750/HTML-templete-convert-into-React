import React from 'react'
import './Service.css'
import serviceData from './serivcesData' 
import ServiceCard from './ServiceCard'
const Services = () => {
    return (
        <React.Fragment>

            <div id="services" className="our-services section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading wow bounceIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                <h6>Our Services</h6>
                                <h2>Discover What We Do &amp; <span>Offer</span> To Our <em>Clients</em></h2>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container-fluid">
                <div className="row">
                    {
                        serviceData.map((item,index)=>{
                            return(
                                <ServiceCard 
                                    key={index}
                                    imgname={item.imagename}
                                    servicename={item.servicename}
                                    message={item.message}
                                />
                            )
                        })
                    }
                </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Services
