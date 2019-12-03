import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Shows from './components/page/Shows';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Shows} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
