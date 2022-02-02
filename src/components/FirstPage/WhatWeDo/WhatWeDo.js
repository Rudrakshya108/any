import React from 'react';
import Circle from './Services/Circle';
import './WhatWeDo.css';
import logo from './whatWeDo.png';
import { ArrowForward} from '@material-ui/icons';

function WhatWeDo() {
    return (
        <>
        <div className='whatWeDoMainDiv'>
        <div className="whatWeDoMainDivInner">
            <div className="firstCircleComponent">
            <img src={logo}/>

            </div>

            <div className="secondDescription">
            <div>
            <h1>WEB DEVELOPMENT</h1>

            </div>

            <div>
                <p>
                An effective and beautiful  website is the game changer. It is one of the essential for every business and organization to take their business to next level.
                    
                </p>
            </div>



            <div className="arrowAndReadMore">
            <div className="readMore">
            <a href="#">Read More 
                   

                   
                   </a>

            </div>
            

               <div className="arrow">
               <ArrowForward/>
               </div>
            </div>
           


            </div>

        </div>
           
        </div>

        <div className="line">
        

        </div>

            
        </>
    )
}

export default WhatWeDo
