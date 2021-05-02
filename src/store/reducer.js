// const movieReducer = (state, action) => {
//     switch (action.type) {
//       case 'POPULATE':
//         return {
//           ...state,
//           movies: action.payload,
//           error: null,
//         };
//       case 'ERROR':
//         return {
//           ...state,
//           movies: [],
//           error: action.payload,
//         };
//       case 'ADD_NOMINATION':
//         return {
//           ...state,
//           nominations: [
//             ...state.nominations,
//             ...(Array.isArray(action.payload)
//               ? action.payload
//               : [action.payload]),
//           ],
//         };
//       case 'REMOVE_NOMINATION':
//         return {
//           ...state,
//           nominations: state.nominations.filter(
//             (nomination) => nomination.imdbID !== action.payload.imdbID,
//           ),
//         };
  
//       default:
//         return state;
//     }
//   };
  
//   export default movieReducer;