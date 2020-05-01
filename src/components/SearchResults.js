import React, { Component } from 'react'
import styled from 'styled-components'
import {
    Card, CardBody,
    CardTitle, Jumbotron, Container, CardImg, CardSubtitle
  } from 'reactstrap'
import Loading from './Loading'
import {Link} from 'react-router-dom'

const axios = require('axios');


export default class SearchResults extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchResults: [],
            rejected: false,
            loading: true
        }
    }

 
    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${this.props.match.params.search}&page=1&include_adult=false`)
            .then( (response) => {
                // handle success
                console.log(response.data.results);
                console.log("firing")
                const results = response.data.results
                this.setState({searchResults: results, loading: false  })
            })
            .catch( (error) => {
                // handle error
                this.setState({rejected: true, loading: false})
                console.log("Error in searchresults call " + error);
            })
    }
    

    componentDidUpdate(prevProps) {
        if (this.props.match.params.search !== prevProps.match.params.search) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${this.props.match.params.search}&page=1&include_adult=false`)
            .then( (response) => {
                // handle success
                console.log(response.data.results);
                console.log("firing")
                const results = response.data.results
                this.setState({searchResults: results, loading: false  })
            })
            .catch( (error) => {
                // handle error
                this.setState({rejected: true, loading: false})
                console.log("Error in searchresults call " + error);
            })
        }
      }

    render() {
        const searchResults = this.state.searchResults.map( (film) => {
            return (
            <Card className="col-lg-3 card-wrapper text-center" key={film.id}>
            <Link to={`/film/${film.id}`}>
                <CardImg id="poster" className="img-fluid" top width="50%" src={`http://image.tmdb.org/t/p/w185//${film.poster_path}`} alt={film.title} />
            </Link>
                <CardBody>
                    <CardTitle className="pb-3"><strong>{film.title}</strong></CardTitle>
                    <CardSubtitle>{film.release_date}</CardSubtitle>
                    {/* <CardText>{film.overview}</CardText> */}
                </CardBody>
            </Card>)
        })

        if (this.state.loading) {return <Loading />}
        if (this.state.rejected) {return (
            <div>
            <Jumbotron fluid>
                <Container className="text-center mx-auto" fluid>
                <h1 className="display-3">Search Results</h1>
                </Container>
            </Jumbotron>
            <h1 className="text-center">Something went wrong, please try again later</h1>
            </div>
        )}
        if (this.state.searchResults.length === 0) {
            return (
                <div>
                <Jumbotron fluid>
                    <Container className="text-center mx-auto" fluid>
                    <h1 className="display-3">Search Results</h1>
                    </Container>
                </Jumbotron>
                <h1 className="text-center">No search results found</h1>
                </div>
            )
        } else {

        return (
            <div className="pb-5">

                <Jumbotron fluid>
                    <Container className="text-center mx-auto" fluid>
                    <h1 className="display-3">Search Results</h1>
                    </Container>
                </Jumbotron>
                <div className="container">
                <MovieWrapper className="row pb-5">
                    {this.state.loading? <Loading /> : searchResults }
                </MovieWrapper>
                </div>
            

                
            </div>
        )}
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