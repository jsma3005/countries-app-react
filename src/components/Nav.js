import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Navigation = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Logo</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" to="/">All countries</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/region/americas">America</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/region/africa">Africa</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/region/asia">Asia</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/region/oceania">Oceania</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/region/europe">Europe</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;