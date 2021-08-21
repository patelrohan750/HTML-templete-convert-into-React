import React from 'react'
import projectData from './Projectdata'
import Project from './Project';
import Slider from "react-slick";
const ProjectSlider = () => {
  
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        rows: 1,
        slidesPerRow: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

    return (
        <React.Fragment>
          <Slider {...settings}>
         

         {
            projectData.map((item,index)=>{
                 return(
                   
                     <Project 
                         key={index}
                         imagename={item.image}
                         projectname={item.projectname}
                         field={item.fild}
                     />
                    
                     
                 )
             })
             
         }
            
         </Slider>
         

        </React.Fragment>
      
      
      
    )
}

export default ProjectSlider
