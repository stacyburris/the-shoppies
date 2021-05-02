import React from 'react';


// renders input search bar
// takes a value from props, and when a user types, it calls a function which updates the value. Taken from props
const SearchBar = (props) => {
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
                type='text'
				value={props.value}
				onChange={(event) => props.setSearchMovie(event.target.value)}
				placeholder='Type to search for a movie...'
			></input>
		</div>
	);
};

export default SearchBar;