import React from 'react';
import LatestBlog1 from './LatestBlog1';
import './LatestBlog.css';
import logo from './aaa.jpeg';



function LatestBlog() {
    const data=[{id:1,advisorAvatar:logo, date:'16 Sep 2021', newsHead:'How hman can be replaced by Robots in by  2030.'},
    {id:2,advisorAvatar:logo, date:'16 Sep 2021', newsHead:'How human can be replaced by Robots in by  2030.'},
    {id:3,advisorAvatar:logo, date:'16 Sep 2021', newsHead:'How human can be replaced by Robots in by  2030.'},];
   

   
    return (
        <>
         <div className="advisorHeader">
          <h1>LATEST BLOG</h1>
      </div>
         <div className="advisorC">
         
         {data.map((val)=>{
             return(
                
                 <LatestBlog1
                     advisorAvatar={val.advisorAvatar}
                     date={val.date}
                     newsHead={val.newsHead}
                     
                 />

               
                
             );
         })},

     
         </div>

       
        

        </>
       
    )
}
        

    
    

export default LatestBlog
