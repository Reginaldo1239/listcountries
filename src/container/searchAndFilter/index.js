import React from 'react';
import Search from '../../component/search';
import Filter from '../../component/filter';
import './style.css'; 
export default function SearchAndFilter(props){
    return(
        <div className="searchAndFilter center">
            <div className="flex">
                <Search eventSearch={(value)=>props.eventSearch(value)} ></Search>
                <Filter
                    eventSelectCountry={(value)=>props.eventSelectCountry(value)}
                ></Filter>
            </div>
        </div>
    )
}    