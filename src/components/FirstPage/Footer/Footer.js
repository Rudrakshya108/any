import { Room,Call, Email} from '@material-ui/icons';
import React from 'react';
import './Footer.css';
import logo from './map.png';

function Footer() {
    return (
        <>
        <div className="footerMain">
        <div className="footer">
        <div className="footerLeft">
        <h4>Our Location</h4>
        <div className="forLogoAndDesc">
            <div className="forLogo">
            <img className="forLogoImage" src={logo}/>

            </div>

           
        </div>

        </div>

        <div className="footerCenter">
        <h4>Quick Links</h4>
        <div className="uiList">
            <ul><li>
                <a href="#">About Us</a>
            </li>

            <li>
                <a href="#">Services</a>
            </li>

            <li>
                <a href="#">Gallery</a>
            </li>

            <li>
                <a href="#">Career</a>
            </li>

            <li>
                <a href="#">Contact Us</a>
            </li>
            </ul>
        </div>
            
            </div>

            <div className="footerCenterAndRightBich">
            <h4>Our Services</h4>
        <div className="uiList">
            <ul><li>
                <a href="#">Web Development</a>
            </li>

            <li>
                <a href="#">Software Development</a>
            </li>

            <li>
                <a href="#">Logo/Graphic Design</a>
            </li>

            <li>
                <a href="#">SEO & Digital Marketing</a>
            </li>

            <li>
                <a href="#">Application Development</a>
            </li>
            </ul>
        </div>


            </div>

            <div className="footerRight">
            <h4>Contact Information </h4>
        <div className="uiList">
        <ul><li className="liDiv">
        <div className="locationIcon">
        <Room/>

        </div>
        <div className="locationDetail">

        <a>Panchamukhi Marga</a> <a>Sinamangal,Kathmandu</a>
        </div>
               
            </li>

            <li className="liDiv">
        <div className="locationIcon">
        <Call/>

        </div>
        <div className="locationDetail">

        <a>+9779861331656,</a> <a>9851241656,01456789</a>
        </div>
               
            </li>

            <li className="liDiv">
        <div className="locationIcon">
        <Email/>

        </div>
        <div className="locationDetail">

        <a>info@aashatech.com</a> <a>info.aashatech@gmail.com</a>
        </div>
               
            </li>

    

           

          
            </ul>
           
        </div>


            
            </div>

          
        

        </div>
      

        </div>
      
       
        
        </>
    )
}





export default Footer
