import React from 'react';
import Search from '../../component/search';
import Filter from '../../component/filter';
import './style.css'; 
export default function SearchAndFilter(props){
    return(
        <div className="searchAndFilter center">
            <div className="flex center"> 
                <Search eventSearch={(value)=>props.eventSearch(value)} ></Search>
                <Filter
                    eventFilterRegion={(value)=>props.eventFilterRegion(value)}
                ></Filter>
            </div>
        </div>
    )
}     