import React, { useState, useEffect } from 'react';
 //import { searchMovie } from '../data/movies';
 //import { GlobalContext } from '../store/index';

// const SearchBar = () => {
//     const [state, dispatch] = useContext(GlobalContext);
//     const [query, setQuery] = useState('');
  
//     const handleChange = (e) => {
//       setQuery(e.target.value);
//     };
  
 //    useEffect(() => {
//       if (query === '') {
//         dispatch({ type: 'ERROR', payload: 'Try searching 🔎 for a movie!' });
//       } else {
//         searchMovie(query).then((movies) => {
//           if (movies && movies.Response === 'True') {
//             dispatch({ type: 'POPULATE', payload: movies.Search });
//           } else {
//             dispatch({ type: 'ERROR', payload: movies.Error });
//           }
//         });
//       }
  //   }, []);
  
//     return (
//       <StyledInput
//         type="text"
//         placeholder="Type to search..."
//         value={query}
//         onChange={(e) => handleChange(e)}
//       />
//     );
//   };
  
  //export default SearchBar;


  const SearchBox = () => {
    //const [state, dispatch] = useContext(GlobalContext);
    const [query, setQuery] = useState('');
  
    const handleChange = (e) => {
      setQuery(e.target.value);
    };
  
     useEffect(() => {
    //   if (query === '') {
    //     dispatch({ type: 'ERROR', payload: 'Try searching 🔎 for a movie!' });
    //   } else {
    //     searchMovie(query).then((movies) => {
    //       if (movies && movies.Response === 'True') {
    //         dispatch({ type: 'POPULATE', payload: movies.Search });
    //       } else {
    //         dispatch({ type: 'ERROR', payload: movies.Error });
    //       }
    //     });
    //   }
     }, [query]);

    return (
      <div className="d-flex align-items-center bg-light px-3 py-2 small rounded-3">
        <div className="d-flex align-items-center flex-grow-1">
          <label htmlFor="queryString" className="me-2 fw-bold text-secondary">
            Search
          </label>
          <input
    
        type="text"
        placeholder="Type to search..."
        value={query}
        onChange={(e) => handleChange(e)}
      />
            {/* id="queryString"
            className="form-control form-control-sm me-2"
            type="text"
            value={queryString}
            onChange={(event) => {
              onQueryChange(event.target.value);
            }}
          /> */}
        </div>
        {/* <div className="d-flex align-items-center">
          <label htmlFor="pageCount" className="me-2 fw-bold text-secondary">
            Show
          </label>
          <input
            id="pageCount"
            className="form-control form-control-sm text-center me-2"
            type="number"
            min="1"
            max="100"
            value={pageCount}
            onChange={(event) => {
              onTotalChange(event.target.value);
            }}
          />
        </div>
        <div>
          <b className="me-2 text-secondary">Total:</b>
          {totalCount}
        </div> */}
      </div>
    );
  };


  export default SearchBox;
  