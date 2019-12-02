import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <h1>Title</h1>
      <Footer />
    </div>
  );
}

export default App;
