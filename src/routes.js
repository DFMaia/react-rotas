import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Header from './components/header';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/> 
                <Route path="/sobre" component={Sobre}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;