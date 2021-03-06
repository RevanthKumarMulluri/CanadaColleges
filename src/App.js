import React from 'react';
import classes from './App.module.scss';
import Register from './containers/register/register';
import CreateForum from './containers/forum/NewForum';
import Nav from './containers/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import {Route,Switch} from 'react-router-dom';
import Login from './containers/login/login';
import {PrivateRoute} from './containers/routerestriction/privateRoute';
import {UnAuthRoute} from './containers/routerestriction/unauthroute';
import Button from './components/UI/button/Button';
import AddForum from './containers/forum/AddForum';
import { Link } from 'react-router-dom';
import GetForum from './containers/forum/getForum';
import SideNav from './containers/navbar/SideNavbar';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <div className={classes.container}>
          <Nav />
          <div className={classes.content}>
          <SideNav/>
            <div className={classes.college_view}>
              <Switch>
                <UnAuthRoute path="/login" component = {Login}/>
              </Switch>
            </div>
          </div>
         {/* <Switch>
          <UnAuthRoute path="/login" component = {Login}/>
          <UnAuthRoute path="/register" component = {Register}/>
          <PrivateRoute path="/startforum" component = {AddForum}/>
          <Route path="/forums/:uniname" component={GetForum} />
          <Route path="/" component = {CreateForum }/> 
        </Switch> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
