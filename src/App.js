import React from 'react';
import './App.css';
import Register from './containers/register/register';
import Nav from './containers/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import {Route,Switch} from 'react-router-dom';
import Login from './containers/login/login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/login" component = {Login}/>
           <Route path="/register" component = {Register}/>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
