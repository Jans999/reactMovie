import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import {
    Card, CardBody,
    CardTitle, Jumbotron, Container
  } from 'reactstrap'

import {Link} from 'react-router-dom'
import Loading from './Loading'

export default class Genres extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genres: [],
            rejected: false,
            loading: true
        }
    }

    // Getting popular films from TMDB api

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            .then( (response) => {
                // handle success
                const results = response.data.genres;
                console.log(results)
                this.setState({genres: results, loading: false})
            })
            .catch( (error) => {
                // handle error
                this.setState({rejected: true, loading: false})
                console.log('error in popular film call' + error);
            })
    }

    render() {
        const genres = this.state.genres.map( (genre) => {
            return (

            <Link class="col-lg-3 text-center" key={genre.id} to={`/genres/${genre.id}/${genre.name}`}>

                <Card className="col-lg-3 card-wrapper text-center" id="genre" key={genre.id}>
                    <CardBody className="flex-row">
                        <CardTitle className="pb-3"><strong>{genre.name}</strong></CardTitle>
                    </CardBody>
                </Card>
                
            </Link>)

        })

        if (this.state.loading) {return <Loading />}
        if (!this.state.rejected) {
            return (
                <div>
                   <Jumbotron fluid>
                        <Container className="text-center mx-auto" fluid>
                        <h1 className="display-3">Popular films!</h1>
                        <p className="lead">Take a look at some of the most Popular films at the moment!</p>
                        </Container>
                    </Jumbotron>
                    <div className="container pb-5">
            
        
                        <MovieWrapper className="row">
                            {genres}
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
    
    /* margin: 0 auto; */

    .card-wrapper {
        max-height: 3em;
        background: black;
        border: white 1px solid;
        width: 15%;
        margin: 1em;
        overflow: hidden;
    }

    #genre{
        flex-direction: row;
        margin: 0 auto;
        padding: 10em;
    }
`
