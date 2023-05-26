import Header from '../components/Header'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addAllMovies } from '../actions/movies'
import ActorPanels from '../components/ActorPanels'
import { Link } from 'react-router-dom';

type ActorsProps = Array<{
    profile_path: string
    name: string
    id: number
  }>
  

const ActorsPage = () => {

  const [actors, setActors] = useState<ActorsProps | null>(null);


  useEffect(() => {

    let apiKey = localStorage.getItem("tmdb_api_key")

    const fetchActors = async() => {

        fetch(`https://api.themoviedb.org/3/person/popular?api_key=${apiKey}`)
          .then(response => response.json())
          .then(data => {
            // Process the list of popular actors here
            console.log(data.results);
            setActors(data.results)
          })
          .catch(error => {
            // Handle any errors
            console.error(error);
          });
    }

    fetchActors()

  
  }, []); 
  
  
  return (
    <div className='page-container page-container--actors-page'>
        <Header />
        <div className='actors-container'>
            {actors && actors.map(actor => {
            return (
                <Link to={`/actor/${actor.id}`}className="actor-box-container">
                    <div className='actor-box' style={{backgroundImage: "url(https://www.themoviedb.org/t/p/w185" + actor.profile_path + ")" }}></div>
                    <div className="actor-name">{actor.name}</div>
                </Link>
            )
            })}
        </div>

    </div>
  );
};

export default ActorsPage;
