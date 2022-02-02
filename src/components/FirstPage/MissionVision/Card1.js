import React from 'react';
import {Money}  from '@material-ui/icons';
import './Card1.css';

function Card1(props) {
   return (
      <>
    
      <div className="cardBackground">
      <div className="cardEmptyDiv">

</div>

     
      <div className="card">

        

         <div className="contentTitle">
         <h3>{props.title}</h3>

         </div>

         <div className="contentDetails">
        <p>{props.description}</p>

         </div>

         
            
            </div>

           



      </div>
          
      </>
    )
}

export default Card1
