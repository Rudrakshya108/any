import React from 'react';
import SocialIcon from '../SocialIcon/SocialIcon';
import './HeroSection.css';
import { Menu} from '@material-ui/icons';
import Link from '@material-ui/core/Link';
import ashatechlogo from './logo.png'
import Contact from './Contact/Contact';
import FirstBlueSeparator from '../BlueSeparator/FirstBlueSeparator/FirstBlueSeparator';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import OurStory from '../OurStory/OurStory';
import ashaTechImage from './NEW.png'
import Card from '../MissionVision/Card';
import LetDiscuss from '../LetDiscuss/LetDiscuss';
import ConnectForm from '../ConnectForm/ConnectForm';
import Footer from '../Footer/Footer';
import OurAdvisor from '../OurAdvisor/OurAdvisor';
import LatestBlog from '../LatestBlog/LatestBlog';
import Slider from '../Slider/Slider';
import HappyClient1 from '../HappyClient/HappyClient1';
import OurProcess from '../OurProcess/OurProcess';
import Projects from '../Projects/Projects';





function HeroSection() {
    function myFunction() {
        var y = document.getElementById("myDIV");
        if (y.style.display === "none") {
            y.style.display = "block";
        } else {
            y.style.display = "none";
        }
      
       
       
       
    
    
    }

    return (
        <>

        <div className='heroBackground'>
            <div className="columnDivSeparator">
            <div className="divForNameLogo">
         
        
            <div className="dynamicLogo"> 

                <span  style={{ fontSize: '30px', color: 'orange'}}> 
                <span  className="dynamic_logo_letter" style={{color: "blue"}}>A</span> 
                <span  className="dynamic_logo_letter">A</span> 
                <span  className="dynamic_logo_letter">S</span> 
                <span  className="dynamic_logo_letter">H</span> 
                <span  className="dynamic_logo_letter">A</span> 
                </span> 

                <span style={{ fontSize: '30px', color: 'orange'}}> 
                <span  className="dynamic_logo_letter" >T</span> 
                <span  className="dynamic_logo_letter">E</span> 
                <span  className="dynamic_logo_letter">C</span> 
                <span  className="dynamic_logo_letter" style={{color: 'blue'}}>H</span> 

                </span>
                </div> 

            
            
 

            <div className="emptySpace">
           
            </div>

            <div className="hamburgerIcon">
               
            <p style={{color: '#557A95'}} ><Menu  onClick={myFunction} /></p>
           

            <div  id="myDIV" style={{display:'none'}}>
               <span style={{color:'red'}}>
               <Link to="#" ><button>HOME</button></Link>
               <Link to="#" ><button>ABOUT</button></Link>
               <Link to="#" ><button>CONTACT</button></Link>
               </span>
               
            </div>
       
           
            </div>
            </div>
           
            
            <div className="columnInner">
           

            <div className="firstColumnDiv">

               <div className="socialIcon">
                  <SocialIcon/>

               </div>

               

           



           </div>



             <div className="secondColumnDiv">

             <div>
             <img src={ashatechlogo}/>

            <div className="letsCreateSomething">
                <h1>Let's Create Something<br></br> beautiful together</h1>
                 </div>
               

                 <div className="ashaTechComputerImage" style={{marginTop:"-15%"}}>

                <img src={ashaTechImage}/>
                <div className="butt">
            <button className="but" >
              Get In Touch
              </button>
            </div>
               
               
              
            </div>
           
                
               
           

             </div>
                 

            
            <div className="thirdColumnDiv">
                  <div className="CallUs">
                  <Contact/>

                  </div>

                

                  </div>

                  


                  </div>



            </div>

                 

           
           

                

               

             </div>

            
       

     

        </div>

        
        <div className="firstBlueSep">
       
        <FirstBlueSeparator/>
        </div>

        <div className="whatWeD">
        <WhatWeDo/>
        </div>

        <div className="ourSto">
        
        <OurStory/>
        </div>


        
        <div className="car">
        
        <Card/>
        </div>

        
        <div className="car">
        <OurProcess/>
        
        </div>

       

        <div className="">
        <LetDiscuss/>
      
        </div>

        <div className="">
        <Projects/>
      
        </div>

        

        <div className="">
        <Slider/>
        
      
        </div>

        <div className="">
        <HappyClient1/>
        
      
        </div>

        <div className="">
        <ConnectForm/>
      
        </div>

        <div className="">
        <OurAdvisor/>
      
        </div>

        <div className="">
        <LatestBlog/>

        </div>

        <div className="">
        <Footer/>
      
        </div>

      

       

       

       


        


       

        {/*
         
       
      
   
      
      
         */}

      
            
        </>
    )
}

export default HeroSection
