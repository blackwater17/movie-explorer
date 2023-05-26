import { useSelector } from 'react-redux';
import selectMovies from '../selectors/selectMovies';
import { Link } from 'react-router-dom';

const ActorMovieGroup = () => {
  
  const selectedMovies = useSelector(selectMovies);

  const isElementVisible = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;
  
    const isVisible =
      rect.top < windowHeight &&
      rect.bottom > 0 &&
      rect.left < windowWidth &&
      rect.right > 0;
    return isVisible;
  }

  const setObserver = () => {
    return false;
    [...document.querySelectorAll(".movie-box")].filter(d => d.getAttribute("data-rendered") === "false").forEach(m => {
      const element = m as HTMLElement;
      if (isElementVisible(element)) {
        element.style.backgroundImage = "url(https://www.themoviedb.org/t/p/w342" + element.getAttribute("data-bg") + ")"
        element.setAttribute("data-rendered", "true")
      }
    })
  }

  /*
  useEffect(() => {
    if (selectedMovies.length === 0) return
    setObserver() // initial
    window.addEventListener("scroll", () => {
      setObserver()
    })
  }, [stateData, selectedMovies]); 
  */

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