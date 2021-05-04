import React, { useState, useEffect }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList'; // importing the list of Movies 
import Header from './components/Header/Header'; // importing header component
import SearchBar from './components/SearchBar/SearchBar'; // importing searchbar component
import AddNomination from './components/Nominations/nominations'; // importing nomination component
//import Button from 'react-bootstrap/Button';
import { API_KEY } from './requirements';
import {NominateContext} from './hooks/Context';

const App = () => {
  const savedData = JSON.parse(localStorage.getItem("nominations")) || [];
  const [nominations, setNominations] = useState(savedData);
	const [getMovies, setGetMovies] = useState([]); // uses state to get and set movies 
  const [searchMovie, setSearchMovie] = useState(''); // state for what the user types in the search bar
  const [nominate, setNominate] = useState([]);

  const fetchMovieData = async (searchMovie) => {
    const omdbUrl = `http://www.omdbapi.com/?s=${searchMovie}&apikey=${API_KEY}`;

    const response = await fetch(omdbUrl);
		const dataReceived = await response.json();
    console.log('Data received:', dataReceived); // from console data is stored inside .Search
		if (dataReceived.Search) {
			setGetMovies(dataReceived.Search);
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


  //   // Displays Banner when Nominations reach 5
  //   useEffect(() => {
  //     (nominations.length >= 5
  //         ?   setShowBanner(true)
  //         :   setShowBanner(false)
  //     )
  // }, [nominations]); // Updates on Nomination Change


	 //<MovieList movies={movies} /> Rendering list of movies and passing movies stored in state as props
   //<Header />
   //<SearchBar searchValue={search} setSearchValue={setSearch} /> // gets & sets search value
   // className='row d-flex align-items-center mt-4 mb-4'
	return (
    <NominateContext.Provider value={{ nominations, setNominations }}>
  <div >
			<div>
				{/* <Header heading='The Shoppies' />*/}
				<SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} 
        
        />
        {/* <Button variant="outline-info">Search</Button> */}
			</div>
      <div >
				<Header heading='My Nominations' />
        <p>Nominate your top 5 favourite movies!</p>
			</div>
			<div className='row'>
				<MovieList 
        getMovies={getMovies} 
        NominateComponent={AddNomination} 
        handleNominateClick={nominateMovie}
        />
			</div>

			<div className='row'>
				<MovieList getMovies={nominate} NominateComponent={AddNomination} />
			</div>
		</div>
    </NominateContext.Provider>
	);

};


export default App;
