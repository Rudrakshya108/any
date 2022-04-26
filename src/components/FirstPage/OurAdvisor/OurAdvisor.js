    import React from 'react';
    import OurAdvisor1 from './OurAdvisor1';
    import './OurAdvisor.css';
    import logo from './aaa.jpeg';



    function OurAdvisor() {
        const data=[{id:1,advisorAvatar:logo, name:'Shashank Guragain', group:'Goyal Group'},
        {id:2,advisorAvatar:logo, name:'Shashank Guru', group:'Amazon'},
        {id:3,advisorAvatar:logo, name:'Shashank Gurujii', group:'Google'},];
    

    
        return (
            <>
            <div className="advisorHeader">
            <h1>OUR ADVISORS</h1>
        </div>
            <div className="advisorC">
            
            {data.map((val)=>{
                return(
                    
                    <OurAdvisor1
                        advisorAvatar={val.advisorAvatar}
                        name={val.name}
                        group={val.group}
                        
                    />

                
                    
                );
            })},

        
            </div>

        
            

            </>
        
        )
    }
            

        
        

    export default OurAdvisor
