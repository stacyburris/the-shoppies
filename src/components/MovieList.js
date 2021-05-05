import React from 'react';
import { Button, Spinner, Col, Card }from 'react-bootstrap';


const MovieList = (props) => {
	// movie = passed (movie)
	// addNominatedMovie = function 
	// nominations = state in local storage
	const {movie, addNominatedMovie, nominations} = props;

	return(
		<div>
			{movie ?
			<Col>
			<Card style={{ width: '12rem' }} bg='dark' text='white'>
			<Card.Img
                            width={64}
                            height={300}
                            className="mr-3"
                            src={movie.Poster}
                            alt={movie.Title}
                        />
                        <Card.Text>{movie.Title}</Card.Text>
                        <Card.Text>{movie.Year}</Card.Text>
                        {nominations.includes(movie) || nominations.length === 5 ? 
                            <Button variant='secondary' disabled >Nominate</Button>
                            : 
                            <Button className='nominate' onClick={() => addNominatedMovie(movie)}>Nominate</Button>
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