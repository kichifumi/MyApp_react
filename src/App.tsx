import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/Login" component={Login} />
      <Route path="/Home" component={Home} />
    </BrowserRouter>
  );
};

export default App;
