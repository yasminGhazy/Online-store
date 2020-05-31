import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Home from './component/Home.js';

function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login}  />

      </div>
    </BrowserRouter>

  );
}

export default App;
