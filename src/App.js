import React from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from './components/ui-elements/Navbar';
import Login from './components/pages/Login';
import Account from './components/pages/Account';
import FreeComponent from './components/pages/FreeComponent';
//import Register from "./components/pages/Register";
import ProtectedRoutes from "./components/templates/ProtectedRoutes";



export default function App() {
  return (

    <div>
      <h1>React Authentication Tutorial</h1>
      <Navbar />
      <Switch>
        <Route exact path="/" component={FreeComponent} />
        <Route exact path="/free" component={FreeComponent} />
        <Route exact path="/login" component={Login} />
        <ProtectedRoutes path="/account" component={Account} />
      </Switch>
    </div>

  )
}