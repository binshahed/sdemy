import React from 'react';
import logo from './logo.png';
import './App.css';
import Header from './Component/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Shop from './Component/Shop/Shop';


function App() {
  return (
    <div className="App">

    <Header logo={logo}></Header>
    <Shop></Shop>
    </div>
  );
}

export default App;
