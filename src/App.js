import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList'; // importing the list of Movies 
import Header from './components/Header/Header'; // importing header component
import SearchBar from './components/SearchBar/SearchBar'; // importing searchbar component
import AddNomination from './components/Nominations/nominations'; // importing nomination component


import { API_KEY } from './requirements';
const App = () => {
	const [movies, setMovies] = useState([]); // uses state to get and set movies 
  const [searchMovie, setSearchMovie] = useState(''); // state for what the user types in the search bar
  const [nominate, setNominate] = useState([]);

  const fetchMovieData = async (searchMovie) => {
    const omdbUrl = `http://www.omdbapi.com/?s=${searchMovie}&apikey=${API_KEY}`;

    const response = await fetch(omdbUrl);
		const dataReceived = await response.json();
    console.log('Data received:', dataReceived); // from console data is stored inside .Search
		if (dataReceived.Search) {
			setMovies(dataReceived.Search);
		}
  };

  const nominateMovie = (movie) => {
		const newNominateList = [...nominate, movie];
		setNominate(newNominateList);
	};

  // API call only happens when the app loads for the first time
  useEffect(() => {
		fetchMovieData(searchMovie);
	}, [searchMovie]); 



	 // <MovieList movies={movies} /> Rendering list of movies and passing movies stored in state as props
   // <Header />
   // <SearchBar searchValue={search} setSearchValue={setSearch} /> // gets & sets search value
	return (
  <div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<Header heading='The Shoppies' />  
				<SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
			</div>
			<div className='row'>
				<MovieList 
        movies={movies} 
        NominateComponent={AddNomination} 
        handleNominateClick={nominateMovie}
        />
			</div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<Header heading='Nominate' />
			</div>
			<div className='row'>
				<MovieList movies={nominate} NominateComponent={AddNomination} />
			</div>
		</div>
	);
};

export default App;
