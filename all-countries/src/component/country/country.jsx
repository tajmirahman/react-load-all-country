import { useState } from 'react';
import './country.css'
export default function Country({ country, handleVisited }) {
    // console.log(country);
    const { name, flags, capital } = country;

    const [visited, setVisited]=useState(false);

    const handleVisite=()=>{
        setVisited(!visited);
    }



    return (
        <div className={`country-container ${visited && 'country-container-bg'}`}>
            <h3>Name- {name.common}</h3>
            <p>Capital- {capital}</p>
            <img className='flags' src={flags.png} alt="" /><br />

     
                <button className='country-btn' onClick={()=>handleVisited(country)}>Marks Visit</button>

                <button  className={`country-btn ${visited && 'visited-btn'}`} onClick={handleVisite}>Visit</button>
                {
                    visited ? 'I am visited this country': 'i want to go there'
                }
          

        </div>
    )
}