import React from 'react';
import cls from './CountryItem.module.css';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const CountryItem = ({flag, name, capital}) =>{
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <Link to={`/country/${name}`} className={classnames(cls.card, "card mt-3")}>
                <div className="card-body text-center">
                    <img alt={`${flag} flag`} src={flag} width="100px" height="80px" />
                    <h1 className={cls.name}>{name}</h1>
                    <p className={cls.capital}><b>Capital: </b>{capital}</p>
                </div>
            </Link>
        </div>
    )
}

export default CountryItem