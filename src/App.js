import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/ui-elements/Navbar';
import Login from './components/pages/Login';
import Account from './components/pages/Account';
import FreeComponent from './components/pages/FreeComponent';



export default function App() {
  return (

    <div>
      <h1>React Authentication Tutorial</h1>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Account />} />
        <Route exact path="/free" element={<FreeComponent />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>

  )
}