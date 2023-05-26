import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header'
import Backdrop from '../components/Backdrop'
import MoviePanels from '../components/MoviePanels'
import { MovieProps, MovieCastProps } from '../types';

const MoviePage = () => {
  const [movie, setMovie] = useState<null | MovieProps>(null);
  const [movieCast, setMovieCast] = useState<null | MovieCastProps>(null);
  const [movieGenres, setMovieGenres] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {

    let apiKey = process.env.REACT_APP_TMDB_API_KEY

    const fetchMovie = async() => {
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
      .then(response => response.json())
      .then(movieResult => {
        setMovie(movieResult);
      })
      .catch(error => {
        console.error(error);
      });
    }

    const fetchMovieCast = async() => {
      fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          setMovieCast(data) // {cast, crew}
        })
        .catch(error => {
          console.error(error);
        });
    }

    const fetchMovieGenres = async() => {
      fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=genres`)
      .then(response => response.json())
      .then(data => {
        setMovieGenres(data.genres)
      })
      .catch(error => {
        console.error('Error:', error);
      });    
    }

    fetchMovie()
    fetchMovieCast()
    fetchMovieGenres()

    document.querySelector("body")!.className+=" movie-page--body"
  
  }, []); 
  
  return (
    <div className='page-container page-container--movie-page'>
        <Header />
        <Backdrop movie={movie} />
        <MoviePanels movie={movie} movieCast={movieCast} movieGenres={movieGenres} />
    </div>
  );
};

export default MoviePage;