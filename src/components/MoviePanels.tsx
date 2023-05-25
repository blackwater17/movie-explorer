import React, { useState, useEffect } from 'react';
import BASE_URL from '../config/config';
import { Link } from 'react-router-dom';

type MovieProps = {
    vote_average: number,
    vote_count: number,
    original_title: string,
    release_date: string,
    overview: string,
    poster_path: string
}

type MovieCastProps = {
    cast: Array<{
        id: string | number;
        name: string;
    }>;
    crew: Array<{
        job: string;
        name: string;
        id: string | number;
        department: string;
      }>;
}

type MovieGenresProps = Array<{
    name: string
}>;
  

function MoviePanels({ movie, movieCast, movieGenres }: { movie: MovieProps | null; movieCast:MovieCastProps|null; movieGenres: MovieGenresProps }) {
  const [selectedContent, setSelectedContent] = useState<string | number>("cast");
  const [importantInfo, setImportantInfo] = useState(["genre_ids", "original_language", "original_title", "release_date", "vote_average", "vote_count"]);

  const setActive = (id: number | string) => {
    document.querySelectorAll(".useful-links-container div").forEach(d => {
        d.id === id ? d.className += " active" : d.classList.remove('active');
    })
    setSelectedContent(id)
  };

  let director
  if (movieCast){
    director = movieCast.crew?.find(person => person.job === 'Director');
  }

  return (
    <div className='movie-panels'>
        <div className='movie-panel movie-panel-1'>
            {movie && <div className='movie-poster' style={{backgroundImage: "url(https://www.themoviedb.org/t/p/w342" + movie.poster_path + ")" }}></div>}
            <div className='movie-stats'>
                <div className='movie-stat'>
                    Rating: <span className='value'>{movie && movie.vote_average!=undefined && movie.vote_average.toFixed(2)}</span>
                </div>
                <div className='movie-stat'>
                    Votes: <span className='value'>{movie && movie.vote_count}</span>
                </div>
            </div>
        </div>
        <div className='movie-panel movie-panel-2'>
            <div className='movie-primary-info'>
                <div className='movie-title'>{movie && movie.original_title}</div>
                <div className='second-line'>
                    <div className='movie-year'>{movie && movie.release_date !== undefined && movie.release_date.slice(0,4)}</div>
                    {director && (
                        <>
                        <div className='directed-by'>Directed by</div>
                        <Link to={"/actor/"+director.id}>{director.name}</Link>
                        </>
                    )}      
                </div>
            </div>
            <div className='movie-synopsis'>{movie && movie.overview}</div>
            <div className='useful-links-container'>
                <div id="cast" onClick={() => setActive('cast')} className="active">CAST</div>
                <div id="crew" onClick={() => setActive('crew')}>CREW</div>
                <div id="details" onClick={() => setActive('details')}>DETAILS</div>
                <div id="genres" onClick={() => setActive('genres')}>GENRES</div>
            </div>
            <div className='useful-link-content'>
                {selectedContent === "cast" && 
                    <div className='cast-content-container'>
                        {movieCast && movieCast.cast !=undefined && movieCast.cast.map(e => {
                            return (
                                <Link to={"/actor/" + e.id} className='tag' >{e.name}</Link>
                            )
                        })}
                    </div>
                }
                {selectedContent === "crew" && 
                    <div className='crew-content-container'>
                        {movieCast && movieCast.crew!=undefined && movieCast.crew.slice(0, 20).map(e => {
                            return (
                            <div className='crew-line'>
                                <div className='crew-role-container'> 
                                    <div className='crew-role'>{e.department}</div> 
                                    <div className='crew--center'> </div>
                                </div>
                                <Link className='tag' to={"/actor/" + e.id}>{e.name}</Link>
                            </div>
                            )
                        })}
                    </div>
                }
                {selectedContent === "details" && 
                    <div className='details-container'>   
                        {movie!=undefined && Object.entries(movie).map(([prop, value], i) => { 
                            return (
                                importantInfo.includes(prop) && 
                                <div className='detail-line' key={i}>
                                    <div className='detail-name-container'> 
                                        <div className='detail-name'>{prop}</div> 
                                        <div className='detail--center'> </div>
                                    </div>
                                    <div className="detail-value">{value!=null&&value.toString()}</div>
                                </div>
                            )
                        })
                        }
                    </div>
                }
                {selectedContent === "genres" && 
                    <div className='genres-container'>
                        {movieGenres !=undefined && movieGenres.map((genre, i) => {
                            return (<div className='genre tag' key={i}>{genre.name}</div>)
                        })}
                    </div>
                }
            </div>
        </div>
    </div>
  );
}

export default MoviePanels;
