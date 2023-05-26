import { useState } from 'react';
import ActorMovieGroup from './ActorMovieGroup'
import ActorFilterMovies from './ActorFilterMovies'
import { ActorProps } from '../types';

function ActorPanels({ actor }: { actor: ActorProps }) {

  const [textLoaded, setTextLoaded] = useState(false);

  const loadBiography = () => {
     if (textLoaded) {
       document.querySelector(".biography-text")!.textContent = actor.biography.slice(0, 200) + "... "
        setTextLoaded(false)
     } else {
        document.querySelector(".biography-text")!.textContent = actor.biography + " "
        setTextLoaded(true)
     }
  }

  return (
    <div className='actor-panels'>
        <div className='actor-panel actor-panel-1'>
            <div className='panel-header'>
                <div className='panel-header-title'>FILMS STARRING</div>
                <div className='panel-actor-name'>{actor.name}</div>
            </div>
            <ActorFilterMovies /> 
            <ActorMovieGroup />
        </div>
        <div className='actor-panel actor-panel-2'>
            {actor.profile_path != null &&
                <img className='actor-img' src={'https://image.tmdb.org/t/p/h632/' + actor.profile_path} />
            }
            {actor.profile_path === null &&
                <img className='actor-img' src={process.env.PUBLIC_URL + '/img/unknown-person.png'} />
            }
            {actor.biography &&
            <div className='actor-biography'>
                <span className="biography-text">{actor.biography.slice(0, 200) + "... "}</span> 
                <span className='load-more' onClick={loadBiography}>{textLoaded ? "(x)" : "more"}</span>
            </div>
            }
        </div>
    </div>
  );
}

export default ActorPanels;