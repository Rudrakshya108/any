import React from 'react';
import Card1 from './Card1';
import './Card.css';



function Card() {
    const data=[{id:1, title:'Mission', description:'We are here to transfigure your webwish into reality and give that dynamic look for your business ideas.'},
    {id:2, title:'Vision', description:'Give the best customer experience possible completing the task on time and good value for money .'},
    {id:3, title:'Values', description:'Built on the foundation of knowledge and passion garnered in the Engineering and IT field.'},];
   

   
    return (
        <>
         <div className="cardBack">
         {data.map((val)=>{
             return(
                
                 <Card1
                     title={val.title}
                     description={val.description}
                 />

               
                
             );
         })},

     
         </div>

       
        

        </>
       
    )
}
        

    
    

export default Card
