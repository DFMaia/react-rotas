import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sobre extends Component{
    render(){
        return(
            <div>
                <h2>Página sobre</h2>
                <Link to="/">Ir para a página Home</Link>
            </div>
        );
    }
}

export default Sobre;