import React from 'react';
import './Projects.css';
import logo from './roti.png'

function Projects() {
    return (
        <>
        <div className="projects">
        <div className="projectNam"><h1>PROJECTS</h1></div>
        
            <div className="projectTopThree">
            <div className="projectFirstImage">
            <img src={logo}/>

            </div>

            <div className="projectFirstImage">
            <img src={logo}/>
                
                </div>

                <div className="projectFirstImage">
                <img src={logo}/>
                
                </div>

            </div>

            <div className="projectBottomThree">

            <div className="projectFirstImage">
            <img src={logo}/>
                
                </div>

                <div className="projectFirstImage">
                <img src={logo}/>
                
                </div>

                <div className="projectFirstImage">
                <img src={logo}/>
                
                </div>
                
                </div>
        </div>
            
        </>
    )
}

export default Projects
