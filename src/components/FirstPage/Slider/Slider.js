import "./Slider.css";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './aa.jpg';
import image2 from './bb.jpg'



export default function Slider() {
  return (
    <div className="slider">
    <div className="appKoPara"><h1><strong>TESTIMONIALS</strong></h1></div>
   
     <AliceCarousel autoPlay autoPlayInterval="2000" infinite autoPlay={true} disableButtonsControls disableDotsControls
        
       >
     <div>
     <img src={image1} className="sliderimg" alt=""/>
     <div className="sliderHeader">
        
    </div>

     </div>
     
     
     
      <div className="sliderHeader">
      <img src={image2} className="sliderimg" alt=""/>
        
    </div>
    </AliceCarousel>
    </div>
  );
}
