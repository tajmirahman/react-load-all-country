import { useEffect } from "react";
import { useState } from "react"
import Country from "./country/country";
import './countries.css'

export default function Countires(){

    const [countries, setCountries]=useState([]);
    const [visitedCountries, setVisitedCountries]=useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    }, []);

    const handleVisited=(country)=>{
        
        const newVisitedCountries=[...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }


    return(
        <div>
            <h3>Contries - {countries.length}</h3>

            <div>
                <h2>Visited Country- {visitedCountries.length}</h2>
                <ul>
                    {
                        visitedCountries.map(country=> <li
                            key={country.cca3}
                            >{country.name.common}</li>)
                    }
                </ul>
            </div>

            {/* Countires container */}
            <div className="countries-container">
            {
                countries.map(country=> <Country
                    key={country.cca3}
                    handleVisited={handleVisited}
                    country={country}>

                     </Country>)
            }
            </div>
        </div>
    )
} 