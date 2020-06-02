import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import Home from './component/Home';
import User from './component/users';

function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
      
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login}  />
        <Route path="/users" component={User}  />

      </div>
    </BrowserRouter>

  );
}

export default App;
