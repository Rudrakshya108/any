import React from 'react';

import './LatestBlog1.css';

function LatestBlog1(props) {
   return (
      <>
    
      <div className="latestBlog1">
      <div className="latestImage">
      <img src={props.advisorAvatar}/>
      

      </div>

      <div className="dateAndNews">
          <div className="date">
          {props.date}

          </div>

          <div className='news'>
          {props.newsHead}

          </div>

          
      </div>


     

  


     
    

      </div>
          
      </>
    )
}

export default LatestBlog1
