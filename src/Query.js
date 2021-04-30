const query = (
    pageCount, 
    queryString
    ) => {
  
      return {
        query: `
        {
          viewer {
            title
            year
            imdbID
            type
            poster
          }
        }
      `,
      };
    };