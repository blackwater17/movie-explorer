import Header from '../components/Header'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ActorsProps } from '../types';
  
const ActorsPage = () => {

  const [actors, setActors] = useState<ActorsProps | null>(null);

  useEffect(() => {

    let apiKey = process.env.REACT_APP_TMDB_API_KEY

    const fetchActors = async() => {

        fetch(`https://api.themoviedb.org/3/person/popular?api_key=${apiKey}`)
          .then(response => response.json())
          .then(data => {
            const actors = data.results
            setActors(actors)
          })
          .catch(error => {
            console.error(error);
          });
    }

    fetchActors()

  }, []); 
  
  return (
    <div className='page-container page-container--actors-page'>
        <Header />
        <div className='actors-container'>
            {actors && actors.map((actor, i) => {
            return (
                <Link to={`/actor/${actor.id}`} key={i} className="actor-box-container">
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