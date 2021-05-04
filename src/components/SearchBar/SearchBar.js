import React from 'react';
import { Navbar, Form} from 'react-bootstrap';
import Header from '../Header/Header';
import SearchIcon from '@material-ui/icons/Search';
import { InputAdornment, Input } from '@material-ui/core';
import '../SearchBar/SearchBar.scss'; 
//src/components/SearchBar/SearchBar.scss
// renders input search bar
// takes a value from props, and when a user types, it calls a function which updates the value. Taken from props
const SearchBar = (props) => {
	return (
		<div>
      <Navbar className="nav-color" variant="dark">
      <Header heading='The Shoppies' />  
		  <Form inline>
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
      placeholder='Find Movies...'
      className="mr-sm-2" />
 
	  </Form>
   
	  </Navbar> 
		</div>
	);
};

export default SearchBar;

