import React from 'react';
import HappyClient1 from './HappyClient1';
import './HappyClient.css';
import logo from './aaa.jpeg';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";




function HappyClient() {
    const data=[{id:1,advisorAvatar:logo, group:'Goyal Group'},
    {id:2,advisorAvatar:logo,  group:'Amazon'},
    {id:3,advisorAvatar:logo,  group:'Google'},];



    return (
        <>
        <div className="advisorHeader">
        <h1>OUR HAPPY CLIENTS</h1>
    </div>
        <div className="advisorC">
        
        {data.map((val)=>{
            return(

                <AliceCarousel autoPlay autoPlayInterval="2000" infinite autoPlay={true} disableButtonsControls disableDotsControls
        
        >
       <HappyClient1
                    advisorAvatar={val.advisorAvatar}
                   
                    group={val.group}
                    
                />
     
         
    
     </AliceCarousel>
                
              

            
                
            );
        })},

    
        </div>

    
        

        </>
    
    )
}
        

    
    

export default HappyClient
