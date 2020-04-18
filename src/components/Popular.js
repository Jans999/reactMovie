import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'



import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Jumbotron, Container
  } from 'reactstrap'

import {Link} from 'react-router-dom'

export default class Popular extends Component {
    // console.log(process.env.REACT_APP_API_KEY)

    constructor() {
        super();
        this.state = {
            popularFilms: [],
            rejected: false
        }
    }

    // Getting popular films from TMDB api

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
            .then( (response) => {
                // handle success
                const results = response.data.results;
                this.setState({popularFilms: results})
            })
            .catch(function (error) {
                // handle error
                this.setState({rejected: true})
                console.log('error in popular film call' + error);
            })
    }



    render() {

        const movies = this.state.popularFilms.map( (film) => {
            return (
            <Card className="col-lg-3 card-wrapper text-center" key={film.id}>
            <Link to={`/popular/${film.id}`}>
                <CardImg id="poster" class="img-fluid" top width="50%" src={`http://image.tmdb.org/t/p/w185//${film.poster_path}`} alt={film.title} />
            </Link>
                <CardBody>
                    <CardTitle className="pb-3"><strong>{film.title}</strong></CardTitle>
                    <CardSubtitle>{film.release_date}</CardSubtitle>
                    {/* <CardText>{film.overview}</CardText> */}
                </CardBody>
            </Card>)
        })


        if (!this.state.rejected) {
            return (
                <div>
                   <Jumbotron fluid>
                        <Container className="text-center" fluid>
                        <h1 className="display-3">Popular films!</h1>
                        <p className="lead">Take a look at some of the most Popular films at the moment!</p>
                        </Container>
                    </Jumbotron>
                    <div className="container pb-5">
            
        
                        <MovieWrapper className="row">
                            {movies}
                        </MovieWrapper>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container text-center pt-5"><h2>Something went wrong! Sorry!</h2></div>
            )
        }
        
     

       
    }
    }

const MovieWrapper = styled.div`
    
    margin: 0 auto;

    .card-wrapper {
        max-height: 40em;
        /* margin: 1em; */
        overflow: hidden;
    }

    #poster{
        margin: 0 auto;
        margin-top: 1em;
        cursor: pointer;
        width: 50%  !important;
    }
`