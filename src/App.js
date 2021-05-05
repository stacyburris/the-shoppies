import React from 'react';
import Main from './components/Main/main'; // imports main components where API is called
import {Jumbotron } from 'react-bootstrap'; // Bootstrap to create the header container 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import MovieFilterIcon from '@material-ui/icons/MovieFilter'; // Material UI Icon

// This function renders the title as well as the main component 
const App = () => {
  return (
    <div className='app'>
      <Jumbotron className='jumbotron'> 
        <h1 className='header'>
          <MovieFilterIcon className='film-strip' inherit='large'/>The Shoppies
        </h1>
      </Jumbotron>
      <Main />
      
    </div>
  )
}
export default App;