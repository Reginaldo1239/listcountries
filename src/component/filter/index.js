import React, { useState } from 'react';
import { IoIosArrowRoundDown } from "react-icons/io";
import { IconContext } from "react-icons";

import './style.css';
export default function Filter(props){

    const [optionCountryVisible,setOptionCountryVisible] = useState(false);
    return(
        <div className="filter">
                <div className="filterRegion" onClick={()=>setOptionCountryVisible(!optionCountryVisible)} >
                    <span>Filtro por região</span>
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
                        <div className="singleRegion" onClick={()=>props.eventSelectCountry('africa')}>
                                <span>Africa</span>
                            </div>
                            <div className="singleRegion" onClick={()=>props.eventSelectCountry('americas')} >
                                <span>America</span>
                                </div>
                                <div className="singleRegion" onClick={()=>props.eventSelectCountry('asia')} >
                                <span>Asia</span>
                                </div>
                                <div className="singleRegion" onClick={()=>props.eventSelectCountry('europe')} >
                                 <span>Europa</span>
                                </div>
                                <div className="singleRegion" onClick={()=>props.eventSelectCountry('oceania')}  >
                                    <span>Oceania</span>
                            </div>
                    </div>
}
 
        </div>
    )

}