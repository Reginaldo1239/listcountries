import React from 'react';
import './style.css';
export default function Header(props){
    return(
   <header >
       <div className="flex center">
           <div className="title">
                    <span>Where in the world ?</span>
               </div>
            <div className="buttonChangeColor">
                <span >Dark Mode</span>
            </div> 
       </div>
   </header>
    ) 
}     