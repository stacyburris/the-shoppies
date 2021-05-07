import React,  { useState, useEffect } from 'react'
import MovieList from '../MovieList/movieList';
import Nomination from '../Nominations/nominations';
import { Form, Container, Row, Col } from 'react-bootstrap';
import { API_KEY } from '../../requirements'; // Imports Needed Requirements
import NominationsComplete from '../Alerts/nominationComplete';
import MyButton from '../../Reusables/buttons';
import './main.scss';
require('dotenv').config();

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
//Fetches Data From API With Error CHecking
//TODO: Incorporate Model or Alert BootStrap Here
  const fetchMovieData = (e) => {
    e.preventDefault();
    if(movieSearch.length === 0){
      alert('Please Enter a Movie Title!')
    } else 
    fetch(`https://www.omdbapi.com/?s=${movieSearch}&apikey=${API_KEY}`)

    .then(res => res.json())
     
    .then(movies => setMovies(movies.Search))
    .catch((error) => {
      console.error('Error:', error);
    })
    //setMovie('');
}



// const fetchMovieData = (e) => {
//   e.preventDefault();
//   if(movieSearch.length === 0){
//     alert('Please Enter a Movie Title!')
//   } else 
// fetch(`https://www.omdbapi.com/?s=${movieSearch}&apikey=${API_KEY}`, {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json'
//             }
//         })
//             .then(result => {
//                 if (!result.ok) throw result;
//                 return result.json();
//             })
//             .then(result => {
//                 console.log(result);
//                 result.setMovies(result.Search)({
//                     isLoaded: true,
//                     error: null
//                 });
//             }).catch(error => {
//                 console.log("Error occurred");
//                 try {
//                     error.json().then(body => {
//                         //Here is already the payload from API
//                         console.log(body);
//                         console.log("message = "+body.message);
//                         setMovies(body.Search)({
//                             isLoaded: true,
//                             error: body
//                         });
//                     });
//                 } catch (e) {
//                     console.log("Error parsing promise");
//                     console.log(error);
                   
//                     // setMovies()({
//                     //     isLoaded: true,
//                     //     error: error
//                     // });
//                 } 
//             });
//           }

//////////////////////

// handleSubmit(e) {
//   e.preventDefault()

//   const body = {
//     email: this.state.email,
//   }

//   let resStatus = 0
//   fetch(Config.REST_API_URL + 'users/registration-request', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(body),
//   })
//   .then(res => {
//     resStatus = res.status
//     return res.json()
//   })
//   .then(res => {
//     switch (resStatus) {
//       case 201:
//         console.log('success')
//         break
//       case 400:
//         if (res.code === 'ValidationFailed') {
//           // My custom error messages from the API.
//           console.log(res.fieldMessages)
//         } else {
//           console.log('this is a client (probably invalid JSON) error, but also might be a server error (bad JSON parsing/validation)')
//         }
//         break
//       case 500:
//         console.log('server error, try again')
//         break
//       default:
//         console.log('unhandled')
//         break
//     }
//   })
//   .catch(err => {
//     console.error(err)
//   })
// }


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
//console.log({movies}, {sortMovies})


// If Nominations === 5 Alert User They Have Picked Max Nominations
// COntainer --> Form --> Fetch Data --> Search For Movie 
// RemoveHandler === Clear Search // Resets State
// If Length of Selected Movies is Greater Then 0, Display Search Results (Nominations Left)
// Display Sorted Selected Movies Else Null
// MovieList Component 
// Nomination Component
return(
  
  <div>
           {nominations.length === 5 ? <NominationsComplete/> : ''}
            <Container>
                <Form className='input-data' onSubmit={fetchMovieData}>
                    <Form.Group>
                        <Form.Label className='title'>Welcome To The Movie Awards 🏆</Form.Label>
                        <Form.Control onChange={movieSearchHandler} value={movieSearch} type='text' placeholder='Type to Search for a Movie...' />
                    </Form.Group>
                    <MyButton onClick={removeHandler}>
                      Clear Search
                  </MyButton>
                </Form>
            </Container>
            <Container className='movie-nominations'>
                <Row>
                    <Col md='8'>
                        <div>
                            <h2 className='sub-header'>Movies</h2>
                            {movies.length > 0 ? 
                                <h4 className='results'>Search Results for {movieSearch}</h4> 
                                : 
                                <h4 className='results'>Search Results</h4> 
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