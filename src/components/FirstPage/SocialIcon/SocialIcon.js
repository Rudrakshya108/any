import React from 'react';
import './SocialIcon.css';
import logo from './fb.png';
import logo1 from './insta.png';
import logo2 from './viber.png';

function SocialIcon() {
    return (
        <>
        <div className='socialIcons'>
        <div className='instagram'>
       <div className="instagramImageDiv">
       <div className="instagramImage">
        <a href="#"><img src={logo1}/></a>

        </div>
        <div className="blank">

        </div>

       </div>

      
       
       

        </div>

        <div className='facebook'>
        <div className="facebookImageDiv">
        <div className="facebookImage">
        <a href="#"><img src={logo}/></a>

        </div>

        

        </div>

        </div>
       

        <div className='viber'>
        <div className="viberImageDiv">
        <div className="viberImage">
        <a href="#"><img src={logo2}/></a>

        </div>
       

        </div>

        </div>
       


        </div>
            
        </>
    )
}

export default SocialIcon
