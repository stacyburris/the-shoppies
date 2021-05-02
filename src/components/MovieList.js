import React from 'react';
import AddNomination from './Nominations/nominations';

const MovieList = (props) => {
    const NominateComponent = props.NominateComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					<div 
                    onClick={() => props.handleNominateClick(movie)}
                    className='overlay d-flex align-items-center justify-content-center'>
						<NominateComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;