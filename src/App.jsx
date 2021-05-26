
import React , {Fragment} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from './inicio.jsx'
import SuperHero from './superHero'


function App() {

  return (
   <div>
      <Router>
        <Switch>
        <Route exact path ="/" component={Inicio}></Route>
        <Route path ="/SuperHero" component={SuperHero}></Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
