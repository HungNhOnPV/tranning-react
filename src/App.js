import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './scss/App.scss';
import Carts from './components/Carts';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Carts/>
    </div>
  );
}

export default App;
