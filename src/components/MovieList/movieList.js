import React from 'react';
import { Button, Spinner, Col, Card }from 'react-bootstrap';
import './movieList.scss';
// Spinner creates a loading feature 

const MovieList = (props) => {
	// movie = passed (movie)
	// addNominatedMovie = function 
	// nominations = state in local storage
	const {movie, addNominatedMovie, nominations} = props;

  // If There Is Movies, Display Cards With Poster Picture and Title : Else Display a Loading Spinner From Bootstrap
  // If Movie is Selected and User Has Not Reached 5 Choices, Buttons Will Remain Clickable With Nominate, : Else DISABLE BUTTON
  // Displays Column, Cards with Poster, Movie Info and Size
	return(
		<div>
			{movie ?
			<Col>
			<Card className='movie-card' style={{ width: '15rem' }} bg='dark' text='dark'>
			<Card.Img
                            width={60}
                            height={285}
                            className="mr-3"
                            src={movie.Poster}
                            alt={movie.Title}
                        />
                        <Card.Text>Movie Title: {movie.Title}</Card.Text>
                        <Card.Text>Release Year:<i> {movie.Year}</i></Card.Text>
                        {nominations.includes(movie) || nominations.length === 5 ? 
                            <Button variant='primary' disabled >Nominated</Button>
                            : 
                            <Button className='nominate' variant='primary' onClick={() => addNominatedMovie(movie)}>Nominate Movie</Button>
                        }
				</Card>
			</Col>
			:
			<Spinner animation="border" variant="warning" />
		}
		</div>
	)
}
export default MovieList;