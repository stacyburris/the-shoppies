import React,  { useState, useEffect } from 'react'
import MovieList from '../MovieList/movieList';
import Nomination from '../Nominations/nominations';
import { Form, Container, Row, Col } from 'react-bootstrap';
import { API_KEY } from '../../requirements'; // Imports Needed Requirements
import NominationsComplete from '../Alerts/nominationComplete';
import './main.scss';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';


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
    console.log('Search Works', e.target.value)
    setMovieSearch(e.target.value);
}
// Fetches Data From OMDB API With Error CHecking
// TODO: Incorporate Model or Alert BootStrap Here
  const fetchMovieData = (e) => {
    e.preventDefault();
    //console.log({fetchMovieData})
    if(movieSearch.length === 0){
      alert('Please Enter a Movie Title!')
    } else 
    fetch(`https://www.omdbapi.com/?s=${movieSearch}&apikey=${API_KEY}`)

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
console.log({movies}, {sortMovies})



const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);



const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
// If Nominations === 5 Alert User They Have Picked Max Nominations
// COntainer --> Form --> Fetch Data --> Search For Movie 
// RemoveHandler === Clear Search // Resets State
// If Length of Selected Movies is Greater Then 0, Display Search Results (Nominations Left)
// Display Sorted Selected Movies Else Null
// MovieList Component 
// Nomination Component
const classes = useStyles();
return(
  
  <div>
           {nominations.length === 5 ? <NominationsComplete/> : ''}
            <Container>
                <Form className='input-data' onSubmit={fetchMovieData}>
                    <Form.Group>
                        <Form.Label className='title'>Welcome To The Movie Awards 🏆</Form.Label>
                        <Form.Control onChange={movieSearchHandler} value={movieSearch} type='text' placeholder='Type to Search for a Movie...' />
                    </Form.Group>
                    <ColorButton variant="contained" color="primary" className={classes.margin} onClick={removeHandler}>
                      Clear Search
                  </ColorButton>
                </Form>
            </Container>
            <Container className='movie-nominations'>
                <Row>
                    <Col md='8'>
                        <div>
                            <h2 className='sub-header'>Movies</h2>
                            {movies.length > 0 ? 
                                <h4 className='movie-search'>Search Results for {movieSearch}</h4> 
                                : 
                                <h4 className='movie-results'>Search Results</h4> 
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