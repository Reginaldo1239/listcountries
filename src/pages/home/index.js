import React from 'react';
import Header from '../../container/header';
import SearchAndFilter from '../../container/searchAndFilter';
import BoxCountry from '../../component/boxCountry';
import './style.css';

export default function Home(props){
return(
        <div className="home">
                <Header></Header>
                
                <main className="center  flex">
                <SearchAndFilter
                        eventSearch ={()=>console.log('event')}
                        eventSelectCountry={(region)=>console.log(region)}
                ></SearchAndFilter>
                                <BoxCountry></BoxCountry>
                                <BoxCountry></BoxCountry>
                                 <BoxCountry></BoxCountry>
                                <BoxCountry></BoxCountry>
                                <BoxCountry></BoxCountry>
                                <BoxCountry></BoxCountry>
                                

                        </main> 
            </div>
    )
}     