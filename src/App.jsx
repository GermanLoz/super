
import React from 'react'
import './App.css';
import './responsive.css'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from './inicio.jsx'
import SuperHero from './superHero'
import Team from './team.jsx'

function App() {
  /*app.use(function(req,res,next){
    res.headers["Access-Control-Allow-Origin", "*"]
    res.headers["Access-Control-Allow-Headers", "Origin, X-Resquested-With, Content-Type,Accept"]
    next()
  })*/
  return (
   <div>
      <Router>
        <Switch>
        <Route exact path ="/" component={Inicio}></Route>
        <Route path ="/SuperHero" component={SuperHero}></Route>
        <Route path ="/Team" component={Team}></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
