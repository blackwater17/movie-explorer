import { useSelector } from 'react-redux';
import selectMovies from '../selectors/selectMovies';
import { Link } from 'react-router-dom';

const ActorMovieGroup = () => {
  
  const selectedMovies = useSelector(selectMovies);

  return (
    <div className='movie-group-container movie-group-container--actor'> 
        <div className='movielist-group'>
            {selectedMovies.length > 0 && selectedMovies.map((movie: {id: string, poster_path: string}, i: number) => (
                movie ? ( 
                  <Link to={"/movie/"+movie.id} key={i} className='movie-box' data-bg={movie.poster_path} data-rendered="false" style={{backgroundImage: "url(https://www.themoviedb.org/t/p/w342" + movie.poster_path + ")" }} />
                ) : (
                  <div key={i} className="movie-box"></div>
                )  
            ))}
        </div>
    </div>
  );
};

export default ActorMovieGroup;