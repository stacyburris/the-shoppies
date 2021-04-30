// import { OMDB_URL, API_KEY } from '../requirements';

// const omdbFetch = `${OMDB_URL}?apikey=${API_KEY}`;

// export const searchMovie = async (query) => {
//   const endpoint = `${omdbFetch}&type=movie&s=${query}`;
//   const response = await fetch(endpoint);
//   const queryMovies = await response.json();
//   console.log('Movie Data', queryMovies)
//   return queryMovies;
  
// };
// export const searchMovieById = async (id) => {
//     const endpoint = `${omdbFetch}&type=movie&i=${id}`;
//     const response = await fetch(endpoint);
//     const idMovie = await response.json();
//     return idMovie;
//   };