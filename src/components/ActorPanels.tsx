import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ActorMovieGroup from './ActorMovieGroup'
import ActorFilterMovies from './ActorFilterMovies'
import selectMovies from '../selectors/selectMovies';

type ActorProps = {
    profile_path: string
    biography: string
    name: string
}

//function ActorPanels(actor: ActorProps) {
  function ActorPanels({ actor }: { actor: ActorProps }) {

  const [textLoaded, setTextLoaded] = useState(false);

  const stateData = useSelector(state => state);
  
  const actorMovies = useSelector(selectMovies);

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
            <ActorFilterMovies movies={actorMovies} /> 
            <ActorMovieGroup movies={actorMovies} />
        </div>
        <div className='actor-panel actor-panel-2'>
            <img className='actor-img' src={'https://image.tmdb.org/t/p/h632/' + actor.profile_path} />
            <div className='actor-biography'>
                <span className="biography-text">{actor.biography!=undefined && actor.biography.slice(0, 200) + "... "}</span> 
                <span className='load-more' onClick={loadBiography}>{textLoaded ? "(x)" : "more"}</span>
            </div>
        </div>
    </div>
  );
}

export default ActorPanels;
