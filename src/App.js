import React, {Component} from 'react';
import './App.css';
import { createBrowserHistory } from "history";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Components
import Header from './components/Header'
import Popular from './components/Popular'
import FilmDetail from './components/FilmDetail'
import Home from './components/Home'
import Footer from './components/Footer';
import Genre from './components/Genres'
import GenreFilmList from './components/GenreFilmList';
import SearchResults from './components/SearchResults'

// Bridging tasks
// Change favicon, title readme etc
// Footer

const history = createBrowserHistory();


class App extends Component {

  render() {
    return (
      <div className="app">
        <Router>
        <Header history={history}/>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/popular" component={Popular} />
            <Route exact path="/genres" component={Genre} />
            <Route path="/film/:id" component={FilmDetail} />
            <Route path="/genres/:genreId/:genreName" component={GenreFilmList} />
            <Route path="/search/:search" render={(props) => <SearchResults {...props}/>} />
      
          </Switch>
          <Footer />
          
        </Router>
      </div>
    );
  }

}

export default App;
