import React from 'react';
import './OurProcess.css';
import logo from './bb.jpg';

function OurProcess() {
    return (
        <>
        <div className="ourProcess">
            <h1>OUR PROCESS</h1>

            <div className="circleFirstRow">
            
                <div className="firstItem">
               

                <div className="requirementText">
                <img src={logo}/>
                <h1>
               
                Requirement Gathering
                </h1>
                </div>
                


                </div>
                <div className="joinCircleHorizontal">

                </div>

                <div className="secondItem">
               
                <div className="requirementText">
                <img src={logo}/>
                <h1>
                UI/UX Design
                </h1>
                </div>
                    
                    </div>
                    <div className="joinCircleHorizontal">

</div>
                  
                    <div className="thirdItem">
              
                <div className="requirementText">
                <img src={logo}/>
                <h1>
                Development
                </h1>
                </div>
                    
                    </div>
      
            </div>

            <div className="circleFIrstRow">
            <div className="joinCircleVertical">

</div>  
                
                </div>
     
         
     

            <div className="circleFirstRow">
                <div className="fourthItem">
            

                <div className="requirementText">
                <img src={logo}/>
                <h1>
                Support & Maintenence
                </h1>
                </div>

                </div>

                <div className="joinCircleHorizontal">

                </div>

                <div className="fifthItem">
            

                <div className="requirementText">
                <img src={logo}/>
                <h1>
                Deployment
                </h1>
                </div>
                    
                    </div>

                    <div className="joinCircleHorizontal">

                    </div>

                    <div className="sixthItem">
                

                <div className="requirementText">
                <img src={logo}/>
                <h1>
                Quality Assurance

                </h1>
                </div>
                    
                    </div>
            </div>

        </div>
            
        </>
    )
}

export default OurProcess
