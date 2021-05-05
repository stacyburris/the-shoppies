import React from 'react';
import Main from './components/Main/Main';
import {Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
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