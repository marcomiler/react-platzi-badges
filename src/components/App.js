import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Badges from '../pages/Badges';
import BadgesNew from '../pages/BadgeNew';
import Layout from '../components/Layout';
import NotFount from '../pages/NotFound';

function App(){

    return(
        //Con el Switch solucionamos el problema de varias rutas dentro de un BrowserRouter
        //con exact definimos que las rutas deban ser exactas para q nos renderizen a las rutas tal cuales
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges}></Route>
                    <Route exact path="/badges/new" component={BadgesNew}></Route>
                    <Route component={NotFount}></Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    );

}

export default App;