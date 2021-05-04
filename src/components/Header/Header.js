import React from 'react';
import SearchBar from '../SearchBar/SearchBar'; // importing searchbar component

// TODO: put bootstrap to make a better header
const Header = (props) => {
	return (
<>
		<div className='col'>
			<h1>{props.heading}</h1>
		</div>	
		<SearchBar />
		</>
	);
};

export default Header;

//searchMovie={searchMovie} setSearchMovie={setSearchMovie} 