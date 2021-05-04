import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList'; // importing the list of Movies 
import Header from './components/Header/Header'; // importing header component
import SearchBar from './components/SearchBar/SearchBar'; // importing searchbar component
import AddNomination from './components/Nominations/nominations'; // importing nomination component
import RemoveNomination from './components/RemoveNomination/RemoveNomination'; // importing remove nomination component
import { API_KEY } from './requirements';


const App = () => {
	const [movies, setMovies] = useState([]); // uses state to get and set movies 
  const [searchMovie, setSearchMovie] = useState(''); // state for what the user types in the search bar
  const [nominated, setNominated] = useState([]); // nominate state

  const fetchMovieData = async (searchMovie) => {
    const omdbUrl = `http://www.omdbapi.com/?s=${searchMovie}&apikey=${API_KEY}`;

    const response = await fetch(omdbUrl);
	const dataReceived = await response.json();
    console.log('Data received:', dataReceived.Search); // from console data is stored inside .Search
		if (dataReceived.Search) {
			setMovies(dataReceived.Search);
		}
  };

  const addNominatedMovie = (movie) => {
		const newNominateList = [...nominated, movie];
		setNominated(newNominateList);
	};


	const removeNominatedMovie = (movie) => {
    const newNominatedList = nominated.filter(
      (nominate) => nominate.imdbID !== movie.imdbID
    );
    setNominated(newNominatedList);
  }

  // API call only happens when the app loads for the first time
  useEffect(() => {
		fetchMovieData(searchMovie);
	}, [searchMovie]); 


	return (
  <div className='container-fluid movie-app'>
			<div >
				<SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
			</div>
			<div className='row'>
				<MovieList 
        	movies={movies} 
        	NominatedComponent={AddNomination} 
        	handleNominateClick={addNominatedMovie}
        />
			</div>
      <div >
				<Header heading='My Nominations' />
        <p>Nominate your top 5 favourite movies!</p>
			</div>
			<div className='row'>
				<MovieList 
        movies={nominated} 
        handleNominateClick={removeNominatedMovie}
        NominatedComponent={RemoveNomination}
        />
			</div>
		</div>
	);
};

export default App;
