import React,  { useState, useEffect } from 'react'
import MovieList from '../MovieList';
import Nomination from '../Nominations/nominations';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { API_KEY } from '../../requirements'; // Imports Needed Requirements
//import AlertModel from '../Alerts/alerts';

const Main = () => {
 
  const [movieSearch, setMovieSearch] = useState(''); // State For User Movie Search in Search Bar
  const [movies, setMovies] = useState([]); // Uses State To Get And Set Movies 
  // Uses State for LocalStorage (Nominations) or Fall Back Empty Array []
  // GetItem (nomination) From LocalStorage : Else []
  const [ nominations, setNominations ] = useState(
  localStorage.getItem('nominations') ?
  JSON.parse(localStorage.getItem('nominations'))
  :   
  [])
localStorage.setItem('nominations', JSON.stringify(nominations));

  // Render Saved Nominations with Refresh 
  useEffect(() => {
		setNominations(nominations);
	}, [nominations]); 

  // Handles Movie Searches
  const movieSearchHandler = (e) => {
    setMovieSearch(e.target.value);
}
// Fetches Data From OMDB API With Error CHecking
// TODO: Incorporate MOdel or Alert BootStrap Here
  const fetchMovieData = (e) => {
    e.preventDefault();
    if(movieSearch.length === 0){
      alert('Please Type to Search!')
    } else 
    fetch(`http://www.omdbapi.com/?s=${movieSearch}&apikey=${API_KEY}`)
    .then(res => res.json())
    .then(movies => setMovies(movies.Search))
    .catch(err => {
      console.error(err)
        alert('Error Something Went Wrong!')
      
    })

    // OLD CODE 
    // const response = await fetch(omdbUrl);
	  // const dataReceived = await response.json();
    // console.log('Data received:', dataReceived.Search); // from console data is stored inside .Search
		// if (dataReceived.Search) {
		// 	setMovies(dataReceived.Search);
		// }
}
// Resets State If Clear Search Button is Clicked
const removeHandler = () => {
  setMovies([]);
  setMovieSearch('');
}
// Clears LocalStorage
const clearNominations = () => {
  setNominations([])
  localStorage.clear()
}
// User Adds a Movie Nominations & Saves to LocalStorage
const addNominatedMovie = (movie) => {
  const newNominateList = [...nominations, movie]
  setNominations(newNominateList)
  localStorage.setItem('nominations', JSON.stringify(nominations))
}
// Filters Nominated Movie & Sets A NewNominatedList
const removeNominatedMovie = (movie) => {
  const newNominatedList = nominations.filter(
    (nominate) => nominate.Title !== movie.Title
  );
  setNominations(newNominatedList);
  }
// Sorts Movies By Year
const sortMovies = movies.sort((a,b) => a.Year - b.Year)

// If Nominations === 5 Alert User They Have Picked Max Nominations
// COntainer --> Form --> Fetch Data --> Search For Movie 
// RemoveHandler === Clear Search // Resets State
// If Length of Selected Movies is Greater Then 0, Display Search Results (Nominations Left)
// Display Sorted Selected Movies Else Null
// MovieList Component 
// Nomination Component
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