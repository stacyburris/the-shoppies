import React from 'react';
import Main from './components/Main/Main'; // imports main components where API is called
import {Jumbotron } from 'react-bootstrap'; // Bootstrap to create the header container 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import MovieFilterIcon from '@material-ui/icons/MovieFilter'; // Material UI Icon
import Footer from './components/Footer/footer';
import clip from './Assets/pop_corn_black_side.mp4';


// Renders Function for Header, Main, Footer
const App = () => {
  return (
    <>
    <div className='app'>
      <Jumbotron className='jumbotron'> 
         <video id='video-background' controls autoPlay loop muted>
          <source src={clip} type="video/mp4" controls="controls" autoplay="true" ></source>
          </video>
              <h1 className='header'>
          <MovieFilterIcon className='film-strip' inherit='large'/>The Shoppies
        </h1>
      </Jumbotron>
      <Main />
    
    </div>
      <Footer/>
</>
  )
}
export default App;




{/* <video className='videoTag' autoPlay loop muted>
<source src={clip} type='video/mp4' />
</video> */}