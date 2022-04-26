import React from 'react';

import './OurAdvisor1.css';

function OurAdvisor1(props) {
   return (
      <>
    
      <div className="ourAdvdisor">

     

      <div className="advisorCard">
         <div className="advisorImage">
         <img src={props.advisorAvatar}/>
         

         </div>

         <div className="advisorName">
         <strong style={{color:' #557A95'}}> {props.name}</strong>
        
         <div className="advisorGroup"> <strong>{props.group}</strong></div>
        

         </div>
      </div>

     
    

      </div>
          
      </>
    )
}

export default OurAdvisor1
