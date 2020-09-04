import React from 'react';
import './style.css';
import {
    Link,
  } from "react-router-dom";
export default function BoxCountry (props){
    let {dataCountry} =props;
    let {name,flag,population,capital,region}=dataCountry;
    console.log(dataCountry)
    return(

        <div className ='boxCountry1' >
        <div className="boxCountry">
        <Link to={`/detail_country/${name}`}>
            <div  className="boxImg" style={ {backgroundImage: "url(" + flag + ")" }} >     
                </div>
            <div className="boxText">
           
                    <h2>{name}</h2>
               <div className="description">
             
                   <span> <strong> População: </strong> <small>{population}</small></span>
                   </div>     
                   <div className="description">
                   <span><strong>Região: </strong><small>{region}</small></span>
                   </div>     
                   <div className="description">
                <span><strong>Capital: </strong><small>{capital}</small></span>
                   </div>    
                 
            </div>
            </Link>
        </div>
        
        </div>


    )
}

