import React, { useEffect, useState } from 'react';
import CountryItem from '../CountryItem/CountryItem';
import Navigation from '../Nav';

const RegionNav = (props) =>{
    const [countries, setCountries] = useState([]);
    const [searchString, setSearchString] = useState('');
    const currentUrl = props.match.params.slug;
    const apiUrl = 'https://restcountries.eu/rest/v2';
    const countryUrl = searchString.trim() === '' ? `${apiUrl}/region/${currentUrl}` : `${apiUrl}/name/${searchString}`

    useEffect(() =>{
        fetch(countryUrl)
        .then(res => res.json())
        .then(r =>{
            if(r.status !== 404){
                return setCountries(r)
            }
        })
    }, [setCountries, currentUrl, apiUrl, countryUrl])
    
    return (
        <div className="container-fluid p-0">
            <Navigation />
            <div className="form-group" style={{width: '50%', margin: '50px auto'}}>
                <input 
                    className="form-control" placeholder="Search country..."
                    onChange={e => setSearchString(e.target.value)}    
                />
            </div>
            <div className="row m-0 p-5">
                {countries.map(item => (
                    <CountryItem key={item.name} flag={item.flag} capital={item.capital} name={item.name} />
                ))}
            </div>
        </div>
    )
}

export default RegionNav;