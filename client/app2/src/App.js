import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FetchComponent from './FetchComponent';
import ListComponent from './ListComponent';

function App() {
  return (
    <div className="App">
      <h1>Statically fecth data from database</h1>
      <FetchComponent /> 
      <br /><br />
      <h1>Dynamically add rows to table</h1>
      <ListComponent />
    </div>
  );
}

export default App;