import React from 'react';
import logo from './aaa.jpeg'
import './HappyClient1.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function HappyClient1(props) {
   return (
      <>
          <div className="advisorHeader">
        <h1>OUR HAPPY CLIENTS</h1></div>

<AliceCarousel autoPlay autoPlayInterval="2000" infinite autoPlay={true} disableButtonsControls disableDotsControls
        
        >
     
      
   
      <div className="ourAdvdisor">
       

     

       <div className="happyClientCard">
          <div className="advisorImage">
          <img src={logo} className="sliderimg1" alt=""/>
         
          
 
          </div>

        
 
          <div className="advisorName">
         
          <div className="happyClientGroup"> <strong style={{color:"black"}}>Mrs Shree</strong></div>
         
 
          </div>
       </div>

       <div className="happyClientCard">
          <div className="advisorImage">
          <img src={logo} className="sliderimg1" alt=""/>
         
          
 
          </div>

        
 
          <div className="advisorName">
         
          <div className="happyClientGroup"> <strong style={{color:"black"}}>Mrs Sarapova</strong></div>
         
 
          </div>
       </div>

       <div className="happyClientCard">
          <div className="advisorImage">
          <img src={logo} className="sliderimg1" alt=""/>
         
          
 
          </div>

        
 
          <div className="advisorName">
         
          <div className="happyClientGroup"> <strong style={{color:"black"}}>Mrs Reeta</strong></div>
         
 
          </div>
       </div>
 
      
     
 
       </div>
     
      
   
         
    
     </AliceCarousel>
    
     
          
      </>       
    )
}

export default HappyClient1
