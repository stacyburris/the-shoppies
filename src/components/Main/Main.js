import React,  { useState, useEffect } from 'react'
import MovieList from '../MovieList';
import Nomination from '../Nominations/nominations';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { API_KEY } from '../../requirements';
// import { Title } from '@material-ui/icons';
import AlertModel from '../Alerts/alerts';

const Main = () => {
 
  const [movieSearch, setMovieSearch] = useState(''); // state for what the user types in the search bar
  const [movies, setMovies] = useState([]); // uses state to get and set movies 
  // Use localStorage as state or [] 
  const [ nominations, setNominations ] = useState(
  localStorage.getItem('nominations') ?
  JSON.parse(localStorage.getItem('nominations'))
  :   
  [])
localStorage.setItem('nominations', JSON.stringify(nominations));

  // Render saved nominations with refresh
  useEffect(() => {
		setNominations(nominations);
	}, [nominations]); 

  const movieSearchHandler = (e) => {
    setMovieSearch(e.target.value);
}

  const fetchMovieData = (e) => {
    e.preventDefault();
    if(movieSearch.length === 0){
      alert('Lets Search for a Movie!')
    } else 
    fetch(`http://www.omdbapi.com/?s=${movieSearch}&apikey=${API_KEY}`)
    .then(res => res.json())
    .then(movies => setMovies(movies.Search))
    .catch(err => {
      console.error(err)
        alert('Uh oh Something went wrong')
      
    })
    // const response = await fetch(omdbUrl);
	  // const dataReceived = await response.json();
    // console.log('Data received:', dataReceived.Search); // from console data is stored inside .Search
		// if (dataReceived.Search) {
		// 	setMovies(dataReceived.Search);
		// }
}

const removeHandler = () => {
  setMovies([]);
  setMovieSearch('');
}

const clearNominations = () => {
  setNominations([])
  localStorage.clear()
}


const addNominatedMovie = (movie) => {
  const newNominateList = [...nominations, movie]
  setNominations(newNominateList)
  localStorage.setItem('nominations', JSON.stringify(nominations))
}

const removeNominatedMovie = (movie) => {
  const newNominatedList = nominations.filter(
    (nominate) => nominate.Title !== movie.Title
  );
  setNominations(newNominatedList);
  }

const sortMovies = movies.sort((a,b) => a.Year - b.Year)

return(
  <div>
           {nominations.length === 5 ? <div>Put Model Component Here</div> : ''}
            <Container>
                <Form className='input-data' onSubmit={fetchMovieData}>
                    <Form.Group>
                        <Form.Label className='title'>Movie Title</Form.Label>
                        <Form.Control onChange={movieSearchHandler} value={movieSearch} type='text' placeholder='Type to Search for a Movie...' />
                    </Form.Group>
                    <Button onClick={removeHandler} variant='dark'> Clear Search</Button>
                </Form>
            </Container>
            <Container className='movie-nominations'>
                <Row>
                    <Col md='8'>
                        <div>
                            <h3 className='sub-header'>Movies</h3>
                            {movies.length > 0 ? 
                                <h5 className='nominationsLeft'>Search Results for {movieSearch}</h5> 
                                : 
                                <h5 className='nominationsLeft'>Search Results</h5> 
                            }
                            <div className='movies'>  
                                {movies.length > 0 ? 
                                    <Row>
                                        {sortMovies.map((movie, key) => 
                                        <MovieList id={key} movie={movie} 
                                        addNominatedMovie={addNominatedMovie} 
                                        nominations={nominations} 
                                        movieSearch={movieSearch} />)}
                                    </Row> 
                                    : 
                                    null 
                                }
                            </div> 
                        </div>
                    </Col>
                    <Col> 
                        <Nomination 
                        nominations={nominations} 
                        removeNominatedMovie={removeNominatedMovie} 
                        clearNominations={clearNominations}/>
                    </Col>
                </Row>
            </Container>    
        </div>
    
)


}
export default Main;