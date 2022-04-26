import React from 'react';
import './OurStory.css';
import logo from './mountain.jpg';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


function OurStory() {
    return (
        <>
        <div className="ourStory">
            <div className="Story">
            <div>
            <h1>
                OUR STORY
            </h1>
        



            </div>

            <div>
            <p>
            Aasha Tech is a dream venture inagurated with the knowledge and experience garnered in the field of IT and Engineering, evolved with the passion of digitalizing the futurebusinesses and startups and also giving that enterprising look to the bygone
ones.

                
            </p>
            </div>
     

            </div>

            <div className="storyImage">
            <AliceCarousel autoPlay autoPlayInterval="2000" infinite autoPlay={true} disableButtonsControls disableDotsControls
        
        >
     
      <img src={logo} className="sliderimg1" alt=""/>
   
 
     
      
      
      
      
       <img src={logo} className="sliderimg1" alt=""/>
         
    
     </AliceCarousel>

         

            </div>
        </div>
            
        </>
    )
}

export default OurStory
