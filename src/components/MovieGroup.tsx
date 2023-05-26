import React, { useEffect, useState } from 'react';
import BASE_URL from '../config/config';
import { Link } from 'react-router-dom';

const MovieGroup = () => {
    
    const [movies, setMovies] = useState(Array(6).fill(null)); 

    useEffect(() => {
    
        let apiKey = localStorage.getItem("tmdb_api_key")
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

        const fetchData = async () => {
            fetch(apiUrl)
            .then(response => response.json())
            .then(response => {
                setMovies(response.results.slice(0, 6));
            })
            .catch(err => console.error(err));
        };
    
        fetchData()
        
        return () => {
          // Perform any cleanup or unsubscribe from subscriptions here
        };
      }, []); // Empty dependency array means the effect runs only once (similar to componentDidMount)
      

  return (
    <div className='movie-group-container'> 
        <div className='group-title-container'>
            <h2 className='movie-group-title'>POPULAR MOVIES</h2>
        </div>
        <div className='movielist-group'>
            {movies.length > 0 && movies.map((movie, i) => (
                movie ? ( 
                    <Link to={"/movie/"+movie.id} key={i} className='movie-box' style={{ backgroundImage:  "url(https://www.themoviedb.org/t/p/w342" + movie.poster_path + ")" }} />
                ) : (
                    <Link to="" key={i} className='movie-box' />
                )  
            ))}
        </div>
    </div>
  );
};

export default MovieGroup;
