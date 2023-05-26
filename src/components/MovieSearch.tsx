import { useState } from 'react';
import { Link } from 'react-router-dom';

type MovieProps = {
  vote_average: number,
  vote_count: number,
  original_title: string,
  release_date: string,
  overview: string,
  poster_path: string,
  id: string | number,
  title: string
}

const MovieSearch = () => {
  
  const [searchResults, setSearchResults] = useState([]);

  const handler = () => {
    const apiKey = localStorage.getItem("tmdb_api_key")
    const keyword = (document.getElementById("movie-search")! as HTMLInputElement).value;
    if (keyword.length < 3) return
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}`)
    .then(response => response.json())
    .then(data => {
        const movies = data.results;
        setSearchResults(movies)
    })
    .catch(error => {
        console.error('Error:', error);
    });
  }

  return (
    <div className='movie-search-container'> 
        <input id="movie-search" type="text" placeholder='Search movie' autoFocus onInput={handler}></input>
        {searchResults.length > 0 &&
        <div className="search-results" >
            {searchResults.map((movie: MovieProps, i) => {
              return (
                <Link className='search-result-container' key={i} to={"/movie/"+movie.id}>
                  <div className='result-texts-container'>
                    <div className='result-name'>{movie.title}</div>
                      <div className='result-type'>({movie.release_date != undefined && movie.release_date.slice(0, 4)})</div>
                    </div>
                </Link>  
                )
            })
            }
        </div>  
        }
    </div>
  );
};

export default MovieSearch;
