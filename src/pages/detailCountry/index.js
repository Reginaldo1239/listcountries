import React, { useEffect,useState } from 'react';
import {

    useParams
  } from "react-router-dom";
import Header from '../../component/header'
import {get} from '../../api';
import './style.css';
export default function DetailCountry(){
    let [infoCountry,setInfoCountry] = useState({});
    let {name} = useParams();
        useEffect(()=>{
            getCountry();
        },[])
     
        const getCountry= async()=>{
           let country =  await get(`https://restcountries.eu/rest/v2/name/${name}`);
                    if(country.status==200){
                        country = await country.data;
                        setInfoCountry(country[0]);
                        console.log(country[0])
                    }
   
       }

    return(
        <div className="detailCounty">
            <Header></Header>
            <main className="center flex" >
                <div className="imgCountry">
                    <img src={infoCountry.flag}/>
                </div>
                <div className="descriptionCountry">
                        <div className="boxTitle">
                        <h2>{infoCountry.name}</h2>
                        </div>
                          <div className="flex">
                          <div className="boxText">
                            <span><strong>capital : </strong><small>{infoCountry.capital}</small></span><br/>
                            <span><strong>população : </strong><small>{infoCountry.population}</small></span>
                            </div>
                             <div className="boxText"> 
                         <span><strong>continente </strong><small>{infoCountry.region}</small></span>
                        </div>

                          </div>
                  
                </div>
            </main>
        </div>
    ) 
}    