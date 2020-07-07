import React from 'react';
import './style.css';
export default function BoxCountry (props){

    return(
        <div className ='boxCountry1'>
        <div className="boxCountry">
            <img src={'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png'}></img>
            <div className="boxText">
                    <h2>Brazil</h2>
               <div className="description">
                   <span> <strong> População:</strong> <small>12344</small></span>
                   </div>     
                   <div className="description">
                   <span><strong>Região:</strong><small>1234</small></span>
                   </div>     
                   <div className="description">
                   <span><strong>Capital:</strong><small>1234</small></span>
                   </div>    

            </div>
        </div>
        </div>
    )
}

