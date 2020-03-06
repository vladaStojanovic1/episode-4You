import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Shows from './page/shows/Shows';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import ShowInfo from './page/showInfo/ShowInfo';
import Episodes from './page/episodes/Episodes';
import EpisodeInfo from './page/episodeInfo/EpisodeInfo';


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
