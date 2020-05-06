import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './containers/Auth/Auth';
import Nav from './containers/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import {Switch,Route} from 'react-router-dom';
import Login from './containers/login/login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/login" component = {Login}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
