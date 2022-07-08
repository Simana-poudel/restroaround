import React, { Component } from 'react';
import './App.css';
import './components/waiter/waiter.css'
import {BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from './routes/Home';
import Waiterhome from './components/waiter/Waiterhome';
import Cook from './components/Cook';


function App() {
    return(
      
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="waiter" element={<Waiterhome />}/>
        <Route path="cook" element={<Cook />}/>
      </Routes>
    </BrowserRouter>
    );

}

export default App;
