// //import React from 'react';
// import SearchBox from '../components/Header/SearchBox';
// import { API_KEY } from '../requirements';
// import { useState, useEffect, useCallback } from 'react';
// //import MovieList from '../components/MovieList';
// //import { Button } from 'bootstrap';
// //import Container from 'react-bootstrap/Container'
// //import Row from 'react-bootstrap/Row'
//  //import query from '../Query';
// //import info from "./db.js";
// //import { useEffect} from "react";
// //import MovieList from './components/MovieList';
// function Movies() {

//   let [pageCount, setPageCount] = useState(1);
//   let [queryString, setQueryString] = useState('');


// const fetchMovieData = useCallback(() => {

//   fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=title`, {
//     method: "POST",
//   })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log('----------', data.Search);


//   })
//   .catch((err) => {
//     console.log(err);
//   });
// }, []);

// useEffect(() => {
// fetchMovieData();

// }, [fetchMovieData]);


// return (
//   <div>
   

//       <SearchBox
             
//           pageCount={pageCount}
//           queryString={queryString}
//           onTotalChange={(myNumber) => {
//           setPageCount(myNumber);
//           }}
//           onQueryChange={(myString) => {
//             setQueryString(myString);
//           }}
//       />
//       <button>Click</button>
          
//      {/* <MovieList /> */}
//   </div>
// );
// }


// export default Movies;