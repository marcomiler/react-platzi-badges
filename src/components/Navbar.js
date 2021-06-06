import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';
import Logo from '../images/logo.svg';

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar_brand" to="/">
                        <img className="Navbar-brand-logo" src={Logo} alt="logo" />
                        <span className="fw-light">Platzi</span>
                        <span className="fw-bold">Conf</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Navbar;