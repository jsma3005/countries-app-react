import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import RegionNav from './components/RegionNav/RegionNav';
import SingleCountry from './components/SingleCountry';
import CountriesPage from './pages/CountriesPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={CountriesPage} />
      <Route path="/region/:slug" component={RegionNav}  />
      <Route path="/country/:name" component={SingleCountry}/>
      <Redirect to="/" />
    </Switch>
  );
}

export default App;