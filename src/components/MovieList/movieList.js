import React from 'react';
import { Spinner, Col, Card }from 'react-bootstrap';
import MyButton from '../../Reusables/buttons';
import './movieList.scss';

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
			<Col className='movie-container'>
			<Card className='movie-card' bg='secondary' text='light' style={{ width: '15rem' }}>
			<Card.Img 
                            width={70}
                            height={285}
                            className="mr-3"
                            src={movie.Poster}
                            alt={movie.Title}
                        />
                        <Card.Text>{movie.Title}</Card.Text>
                        <Card.Text><i> ({movie.Year})</i></Card.Text>
                        {nominations.includes(movie) || nominations.length === 5 ? 
                            <MyButton disabled >Nominated</MyButton>
                            : 
                            <MyButton className='nominate' onClick={() => addNominatedMovie(movie)}>Nominate Movie</MyButton>
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