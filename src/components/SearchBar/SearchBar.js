import React from 'react';
import { InputAdornment, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Navbar, Form} from 'react-bootstrap';
import Header from '../Header/Header';
import '../SearchBar/SearchBar.scss'; 
// renders input search bar
// takes a value from props, and when a user types, it calls a function which updates the value. Taken from props
const SearchBar = (props) => {
	//To make sure the Placeholder text doesn't get cut off
	let input = document.querySelectorAll('Input');
	let i = 15;
	for(i=0; i<input.length; i++){
		input[i].setAttribute('size',input[i].getAttribute('placeholder').length);
	}

	return (
		<div className='input-container'>
		<Navbar className="nav-color" variant="dark">
		<Header heading='The Shoppies' />  
			<Form >
			<Input
		  id="input-with-icon-adornment"
		  startAdornment={
			<InputAdornment position="start">
			  <SearchIcon />
			</InputAdornment>
		  }
		type="text" 
		value={props.value}
		onChange={(event) => props.setSearchMovie(event.target.value)}
		placeholder='Type to Search for a Movie...'
		className="mr-sm-2" />
		</Form>
		</Navbar> 
		</div>
	);
};

export default SearchBar;