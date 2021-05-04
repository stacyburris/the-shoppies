import React, { useLayoutEffect, useState, useContext } from 'react';
import { NominateContext } from '../hooks/Context';
//import { Link } from "react-router-dom";
import NominateButton from '../components/ButtonNomination/ButtonNomination';

const MovieList = (props) => {
    console.log('props on movie list page', props);
    const {nominations} = useContext(NominateContext);
console.log('context nominations----', nominations);
    const { imdbID, getMovies } = props
    //const NominateComponent = props.NominateComponent;
    const [maxNominations, setMaxNominations] = useState(false)


        // Removes Nomination Button when Max Nominations reached
        useLayoutEffect(() => {
            (nominations.length >= 5 
                ? setMaxNominations(true)
                : setMaxNominations(false)
            )
        }, [nominations]);

	return (
     <>
      
        {getMovies.map((movie, index) => (
          <div className='image-container d-flex justify-content-start m-3'>
            <div className='movie-details'>
              <p className='movie-title'>{movie.Title}</p>
              <span className='movie-year'>({movie.Year})</span>
              </div>
      
          <img src={movie.Poster} alt='movie'>
          </img>


        {maxNominations
        ? <></>
        : <NominateButton
        id={imdbID} 
        activeSelection='Nominate!'
        inactiveSelection='Nominated'
    />
        }
      </div>
     
        ))}
     </>        
  );
};


export default MovieList;

