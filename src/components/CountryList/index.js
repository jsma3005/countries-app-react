import React, {useState, useEffect} from 'react';
import CountryItem from '../CountryItem/CountryItem';

const CountryList = () =>{
    const [countries, setCountries] = useState([]);
    const [searchString, setSearchString] = useState('');
    const apiUrl = 'https://restcountries.eu/rest/v2';
    const countryUrl = searchString.trim() === '' ? apiUrl + "/all" : apiUrl + '/name/' + searchString;

    useEffect(() =>{
        fetch(countryUrl)
        .then(res => res.json())
        .then(r =>{
            if(r.status !== 404){
                return setCountries(r)
            }
        })
    }, [setCountries, apiUrl, countryUrl])

    return (
        <div className="container">
            <div className="form-group" style={{width: '50%', margin: '50px auto'}}>
                <input 
                    className="form-control" placeholder="Search country..."
                    onChange={e => setSearchString(e.target.value)}    
                />
            </div>
            <div className="row">
                {countries.map(item => (
                    <CountryItem key={item.name} flag={item.flag} capital={item.capital} name={item.name} />
                ))}
            </div>
        </div>
    )
}

export default CountryList;