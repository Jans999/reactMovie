import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Components
import Header from './components/Header'
import Popular from './components/Popular'
import FilmDetail from './components/FilmDetail'
import Home from './components/Home'
import Footer from './components/Footer';
import Genre from './components/Genres'
import GenreFilmList from './components/GenreFilmList';

class App extends Component {

  render() {
    // console.log(process.env.REACT_APP_API_KEY)
    return (
      <div className="app">
        <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/popular" component={Popular} />
          <Route exact path="/genres" component={Genre} />
          <Route path="/popular/:id" component={FilmDetail} />
          <Route path="/genres/:genreId/:genreName" component={GenreFilmList} />
    
        </Switch>
        <Footer />
    
        </Router>
      </div>
    );
  }

}

export default App;
