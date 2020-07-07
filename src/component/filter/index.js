import React, { useState } from 'react';
import { IoIosArrowRoundDown } from "react-icons/io";
import { IconContext } from "react-icons";

import './style.css';
export default function Filter(props){

    const [optionCountryVisible,setOptionCountryVisible] = useState(false);
    return(
        <div className="filter">
                <div className="filterRegion" onClick={()=>setOptionCountryVisible(!optionCountryVisible)} >
                    <span>Filtro</span>
                    <div className="icon">
                    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                            <div>
                            <IoIosArrowRoundDown />
                            </div>
                         </IconContext.Provider>
                     </div> 
                </div>
                {optionCountryVisible&&
                <div className="optionRegion">  
                        <div className="singleRegion" onClick={()=>{props.eventFilterRegion('africa');setOptionCountryVisible(false)}}>
                                <span>Africa</span>
                            </div>
                            <div className="singleRegion" onClick={()=>{props.eventFilterRegion('americas');setOptionCountryVisible(false)}} >
                                <span>America</span>
                                </div>
                                <div className="singleRegion" onClick={()=>{props.eventFilterRegion('asia');setOptionCountryVisible(false) }} >
                                <span>Asia</span>
                                </div>
                                <div className="singleRegion" onClick={()=>{props.eventFilterRegion('europe');setOptionCountryVisible(false)}} >
                                 <span>Europa</span>
                                </div>
                                <div className="singleRegion" onClick={()=>{props.eventFilterRegion('oceania');setOptionCountryVisible(false)}}  >
                                    <span>Oceania</span>
                            </div> 
                    </div>
}
 
        </div>
    )

}