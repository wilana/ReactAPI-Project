import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import About from '../About'
import HolidaysTable from '../Holidays/HolidaysTable';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/holidays" component={HolidaysTable} />
        </Switch>
    );
}

export default Router;