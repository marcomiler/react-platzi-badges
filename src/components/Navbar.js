import React from 'react';

import '../styles/Navbar.css';
import Logo from '../images/logo.svg';

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <a className="Navbar_brand" href="/">
                        <img className="Navbar-brand-logo" src={Logo} alt="logo" />
                        <span className="fw-light">Platzi</span>
                        <span className="fw-bold">Conf</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Navbar;