import React from 'react'
import {BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/route/privateRoute.jsx'
import PublicRoute from './components/route/publicRoute.jsx'
import Inicio from './inicio.jsx'
import SuperHero from './superHero'
import Team from './team.jsx'

function AppRouters() {
    return (
        <div>
           <Router>
             <Switch>
             <PublicRoute exact path ="/" component={Inicio}></PublicRoute>
             <PrivateRoute path ="/SuperHero" component={SuperHero}></PrivateRoute>
             <Route path="sigin">
               <Redirect to="/"/>
             </Route>
             <PrivateRoute path ="/" component={Team}></PrivateRoute>
             </Switch>
           </Router>
         </div>
       );
}

export default AppRouters
