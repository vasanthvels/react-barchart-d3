import React from 'react';

import Login from '../src/Components/Login/Login'
import Header from '../src/Components/Header/Header'
import ChartWrapper from '../src/Components/charts/chartWrapper'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Header/>
        <Route path="/" exact component={Login}/>
        <Route path="/charts" component={ChartWrapper}/>
    </div>
  );
}

export default App;
