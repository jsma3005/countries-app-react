import React from 'react';
import CountryList from '../../components/CountryList';
import Navigation from '../../components/Nav';

const CountriesPage = () =>{
    return (
        <div>
            <Navigation />
            <CountryList />
        </div>
    )
}

export default CountriesPage;