import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Shows from './components/page/Shows';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import ShowInfo from './components/page/ShowInfo';
import Episodes from './components/page/Episodes';
import EpisodeInfo from './components/page/EpisodeInfo';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Shows} />
        <Route path='/showinfo/:id/episodes/:episodeId/episode' component={EpisodeInfo} />
        <Route path='/showinfo/:id/episodes' component={Episodes} />
        <Route path='/showinfo/:id' component={ShowInfo} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
