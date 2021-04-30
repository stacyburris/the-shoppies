//import { useCallback, useEffect } from "react";
import info from "./db.js";
import { useEffect} from "react";
//import query from "./Query";

function App() {
useEffect(() => {
  const omdbQuery = {
    query: `
    {
      viewer {
        type
      }
    }
    `,
  };
  // `${OMDB_URL}${query}&page=${page}`
  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${info.KEY}&`, {
    method: "POST",
  //   headers: {
  //    'Content-Type': 'application/json',
  //  },
    // headers: key.headers,
    body: JSON.stringify(omdbQuery)
  })
  .then(response => response.json())
  .then(data => {
    console.log('DATA:-----', data);
  })
  .catch( err => {
    console.log(err)
  })
});


  return (
    <div className="App">
{/* <SearchBox
 queryString={queryString}
/> */}
    </div>
  );
}

export default App;



// fetch('https://www.learnwithjason.dev/graphql', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     query: `
//         query GetLearnWithJasonEpisodes($now: DateTime!) {
//           allEpisode(limit: 10, sort: {date: ASC}, where: {date: {gte: $now}}) {
//             date
//             title
//             guest {
//               name
//               twitter
//             }
//             description
//           }
//         }
//       `,
//     variables: {
//       now: new Date().toISOString(),
//     },
//   }),
// })
//   .then((res) => res.json())
//   .then((result) => console.log(result));