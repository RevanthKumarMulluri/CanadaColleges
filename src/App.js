import React from 'react';
import './App.css';
import Register from './containers/register/register';
import Nav from './containers/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import {Route,Switch} from 'react-router-dom';
import Login from './containers/login/login';
import {PrivateRoute} from './containers/routerestriction/privateRoute';
import {UnAuthRoute} from './containers/routerestriction/unauthroute';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <UnAuthRoute path="/login" component = {Login}/>
          <UnAuthRoute path="/register" component = {Register}/>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
