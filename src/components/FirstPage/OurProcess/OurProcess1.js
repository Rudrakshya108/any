import React from 'react';
import OurProcess from './OurProcess';
    
import logo from './required.jpg';



function OurProcess1() {
    const data=[{id:1,advisorAvatar:logo, name:'Requirement Gathering'},
    {id:2,advisorAvatar:logo, name:'UI/UX Design'},
    {id:3,advisorAvatar:logo, name:'Development'},
    {id:2,advisorAvatar:logo, name:'Support & Maintenence'},
    {id:3,advisorAvatar:logo, name:'Deployment'},
    {id:2,advisorAvatar:logo, name:'Quality Assurance'},];



    return (
        <>
        <div className="advisorHeader">
        <h1>OUR ADVISORS</h1>
    </div>
        <div className="advisorC">
        
        {data.map((val)=>{
            return(
                
                <OurProcess
                    advisorAvatar={val.advisorAvatar}
                    name={val.name}
                 
                    
                />

            
                
            );
        })},

    
        </div>

    
        

        </>
    
    )
}
        

    
    

export default OurProcess1
