import React,{useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import { IconContext } from "react-icons";

import './style.css';
export default function Search (props){
    const [value,setValue] = useState('');

    return(
        <div className="search">
            <div className="iconSearch"  onClick={()=>props.eventSearch(value)}>
                <IconContext.Provider value={{size:'1em',color:'white' }}>
                <FaSearch />
                </IconContext.Provider>         
            </div>
            <input 
            onChange={(event)=>setValue(event.target.text)}
            placeholder={'buscar pais'}
            value={value}></input>
        </div>
    )
}    