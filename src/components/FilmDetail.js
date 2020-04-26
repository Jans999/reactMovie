import React, { Component } from 'react'
import axios from 'axios'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Jumbotron, Container
  } from 'reactstrap';

import styled from 'styled-components'

export default class FilmDetail extends Component{

    constructor(props) {
        super(props);
        this.state = {
            movieData: [],
            rejected: false
        }
    }


    componentDidMount() {

        axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        .then( (response) => {
            // handle success
            response = response.data
            console.log(response)
            this.setState({movieData: response})
        })
        .catch(function (error) {
            // handle error
            this.setState({rejected: true})
            console.log('error in popular film call' + error);
        })
    }


    render() {
        const {title, poster_path, tagline, overview} = this.state.movieData
        if (!this.state.rejected) {
            return (
                <div className="pb-5">
                    <Jumbotron fluid>
                        <Container className="text-center" fluid>
                        <h2 className="display-3">{title}</h2>
                        </Container>
                    </Jumbotron>
                    <Movie className="container pb-5">
                        <Card className="text-center">
                            <CardImg className="img" top src={`http://image.tmdb.org/t/p/w500//${poster_path}`} alt={title} />
                            <CardBody>
                                <CardTitle><strong>{title}</strong></CardTitle>
                                <CardSubtitle><em>{tagline}</em></CardSubtitle>
                                <CardText>{overview}</CardText>
                            </CardBody>
                        </Card>
                    </Movie>
                </div>
            )
        } else {
            return (
                <div className="container text-center pt-5"><h2>Film not found</h2></div>

            )
        }
 
    }

 
}


const Movie = styled.div`
    
    .img{
        margin: 2em auto;
        width: 20em;
    }
`