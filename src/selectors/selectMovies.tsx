import { RootState } from '../store/configureStore';
import { MovieProps } from '../types';

const selectMovies = (state: RootState) => {

    const { movies, filters } = state;
    const { year, order } = filters;

    // simplify API response for year
    let results = movies.map((movie: MovieProps) => {
      return {...movie, year: parseInt(movie.release_date.slice(0,4))}
    })
    
    if (year) {
      let startYear = parseInt(year.split("s")[0])
      let endYear = startYear+9
      results = results.filter((movie: MovieProps) => {
        let year = parseInt(movie.release_date.slice(0, 4))
        let val = startYear <= year && endYear >= year  
        return val
      });
    }

    if (order === "title") {
      results = results.sort((a: MovieProps, b: MovieProps) => {
        return a.title > b.title ? 1 : -1
      });
    } else if (order === "rating") {
        results = results.sort((a: MovieProps, b: MovieProps) => {
          return b.vote_average - a.vote_average;
      });
    } else if (order === "popularity") {
        results = results.sort((a: MovieProps, b: MovieProps) => {
          return b.vote_count - a.vote_count;
      });
    } else if (order === "year") {
        results = results.sort((a: MovieProps, b: MovieProps) => {
          return a.year - b.year;
      });
    }
    return results;
};
  
export default selectMovies;