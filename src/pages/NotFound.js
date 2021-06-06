import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/NotFound.css';
import imgNotFound from '../images/notFound.svg';

function NotFound(){

    return(
        <React.Fragment>
            <div className="notFound-container">
                <div className="info-notFound">
                    <h1>Error 404</h1>
                    <p>Página no encontrada</p>
                    <Link className="btn btn-primary" to="/badges">Volver</Link>
                </div>
                <img className="img-notFound" src={imgNotFound} alt="not-found" />
            </div>
        </React.Fragment>
    );

}

export default NotFound;