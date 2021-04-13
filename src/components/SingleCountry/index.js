import React, { useEffect, useState } from 'react';
import Navigation from '../Nav';
import cls from './single.module.css';

const SingleCountry = props =>{
    const [country, setCountry] = useState([]);
    const apiUrl = "https://restcountries.eu/rest/v2/name";
    const currentUrl = props.match.params.name;


    useEffect(() =>{
        fetch(`${apiUrl}/${currentUrl}`)
        .then(res => res.json())
        .then(r => setCountry(r));
    }, [setCountry, apiUrl, currentUrl])

    return (
        <>
            <Navigation />
            {country.map(item => (
                <div key={item.name} className={cls.countryCard + ' card'}>
                    <div className={cls.countryImg}>
                        <img src={item.flag} alt="" />
                    </div>
                    <h1 className={cls.countryName}>{item.name}</h1>
                    <div className={cls.cardBody + ' card-body'}>
                        <p>Capital: <span>{item.capital}</span></p>
                        <p>Area: <span>{item.area} km<sup>2</sup></span></p>
                        <p>Population: <span>{item.population}</span></p>
                        {item.borders.length !== 0 && 
                            <p>Borders: 
                                <span> 
                                    {item.borders.map((i, index) => (<span key={index}>{(index ? ', ' : '') + i } </span>))} 
                                </span>
                            </p>
                        }
                        <p>Languages: 
                            <span> 
                                {item.languages.map((i, index) => (<span key={i.name}>{ (index ? ', ' : '') + i.name } </span>))}
                            </span> 
                        </p>
                        <p>Alpha-3 code: <span>{item.alpha3Code}</span> </p>
                        <p>Region: <span>{item.region}</span></p>
                        <p>Subregion: <span>{item.subregion}</span> </p>
                        <p>Timezone: <span>{item.timezones[0]}</span> </p>
                        <p>Main domain: <span>{item.topLevelDomain[0]}</span></p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default SingleCountry;