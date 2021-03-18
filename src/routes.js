import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Header from './components/header';
import Erro from './pages/erro';
import Produto from './pages/produto';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/> 
                <Route path="/sobre" component={Sobre}/>
                <Route path="/produto/:id" component={Produto}/>
                <Route path="*" component={Erro}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;