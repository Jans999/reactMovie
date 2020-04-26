import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Home = () => {
  return (
    <div className="content">
      <Jumbotron fluid>
        <Container className="text-center" fluid>
          <h2 className="display-3">Welcome!</h2>
          <p className="lead">This is an IMDB fetch and router app built in React</p>
        </Container>
      </Jumbotron>
      <div className="container">
        <div className="row">
        <p className="col-lg-6">This is a project showcasing the use of fetch inside React and collaborating data from fetch to the URL parameters.<br/> <br/>
          Try searching for a movie in the search bar, or take a look at some popular films, or take a look at some genres sorted films for inspiration!
        </p>
          <ul className="col-lg-6">
          <span className="pb-4">Some of the technologies used in this app are:</span>
            <li>React Router: Params</li>
            <li>Fetch API using Axios</li>
            <li>CSS for JS with Styled Components</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;