const selectMovies = (state) => {
    const { movies, filters } = state;
    const { genre, year, order } = filters;

    // simplify API response for year
    let results = movies.map(movie => {
      return {...movie, year: parseInt(movie.release_date.slice(0,4))}
    })
  
    if (genre) {
      results = results.filter((movie) => movie.genre === genre);
    }
  
    if (year) {
      let startYear = parseInt(year.split("s")[0])
      let endYear = startYear+9
      results = results.filter((movie) => {
        let year = parseInt(movie.release_date.slice(0, 4))
        let val = startYear <= year && endYear >= year  
        if (movie.id === 21862) {
          console.log(val);
        }
        return val
      });
    }

    if (order === "title") {
      results = results.sort((a, b) => {
        return a.title > b.title ? 1 : -1
      });
    } else if (order === "rating") {
      results = results.sort((a, b) => {
        return b.vote_average - a.vote_average;
      });
    } else if (order === "popularity") {
      results = results.sort((a, b) => {
        return b.vote_count - a.vote_count;
      });
    } else if (order === "year") {
      results = results.sort((a, b) => {
        return a.year - b.year;
      });
    }
    // console.log('Returning from selector');
    // console.log(results);
    return results;
  };
  
  export default selectMovies;
  