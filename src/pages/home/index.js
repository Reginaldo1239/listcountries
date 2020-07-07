import React, { useEffect, useState } from 'react';
import Header from '../../container/header';
import SearchAndFilter from '../../container/searchAndFilter';
import BoxCountry from '../../component/boxCountry';
import {get }from '../../api'

import './style.css';

export default function Home(props){
                const [countries,setCountries] = useState([]);
                useEffect(()=>{
                       
                        getlAllCountries();
                },[])
                
               const getlAllCountries= async ()=>{
                let countries = await  get('https://restcountries.eu/rest/v2/all')
                if(countries.status==200){
                        countries= await countries.data;
                        console.log(countries)
                        setCountries(countries)
                }
                }
                const searchCountry = async(nameCountry)=>{
                        let country = await get(`https://restcountries.eu/rest/v2/name/${nameCountry}`);
                        if(country.status==200){
                                country = await country.data;
                                setCountries(country);                    }
           
                }
                const filterCountryForRegion = async(nameRegion)=>{
                        let region = await get(`https://restcountries.eu/rest/v2/region/${nameRegion}`);
                        if(region.status==200){
                                region = await region.data;
                                setCountries(region);
                        }
                }        

 
return(
        <div className="home">
                <Header></Header>
                <SearchAndFilter
                        eventSearch ={(value)=>searchCountry(value)}
                        eventFilterRegion={(region)=>filterCountryForRegion(region)}
                ></SearchAndFilter>
                <main className="center  flex">
                        {countries.map((element,index)=>
                               <BoxCountry key={index} dataCountry={element} ></BoxCountry> 
                        )}
                         
                        </main>  
            </div>
    )
}     