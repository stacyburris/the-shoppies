import React from 'react';


const MovieList = (props) => {
    const NominatedComponent = props.NominatedComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
			
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt={movie.Title}></img>
					{/* <span><p>({movie.Year})</p></span> */}
					<div 
                    onClick={() => props.handleNominateClick(movie)}
                    className='overlay d-flex align-items-center justify-content-center'>
						<NominatedComponent/>
						</div>
					</div>
			))}
		</>
	);
};
export default MovieList;