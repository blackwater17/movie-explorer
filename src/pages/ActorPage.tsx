import Header from '../components/Header'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addAllMovies } from '../actions/movies'
import ActorPanels from '../components/ActorPanels'

type ActorProps = {
  profile_path: string
  biography: string
  name: string
}

const ActorPage = () => {

  const dispatch = useDispatch();
  const [actor, setActor] = useState<ActorProps | null>(null);
  const { actorId } = useParams();
  // const [actorMovies, setActorMovies] = useState([]);

  useEffect(() => {

    let apiKey = localStorage.getItem("tmdb_api_key")

    const fetchActor = async() => {
      fetch(`https://api.themoviedb.org/3/person/${actorId}?api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const artist = data;
        setActor(artist)
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }

    const fetchActorMovies = async() => {
      fetch(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          const movies = data.cast;
          // setActorMovies(movies)
          dispatch(addAllMovies(movies));
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    fetchActor()
    fetchActorMovies()
  
  }, []); 
  
  
  return (
    <div className='page-container page-container--actor-page'>
        <Header />
        {actor && <ActorPanels actor={actor} />}
    </div>
  );
};

export default ActorPage;
