import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setYear, setOrder } from '../actions/filters'

const ActorFilterMovies = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    document.querySelectorAll(".select-container").forEach(s => {
        if (!s) return false
        s.querySelectorAll("ul.select li").forEach(li => {
            li.addEventListener("click", () => {
              const spanElement = s.querySelector("span");
              const selectElement = s.querySelector(".select")
              const ulElement = s.querySelector("ul.select");
              
              if (spanElement === null) return false;
                (spanElement as HTMLElement).textContent = li.textContent;
                (selectElement as HTMLElement).style.display = "none"
                let id: string | undefined;
                
                if (ulElement !== null) {
                  id = ulElement.id;
                } 
                
                if (li.id === undefined) return // clicked label
                if (id === "select-year" && li.id !== null && li.id !== undefined) {
                    dispatch(setYear(li.id));
                } else if (id === "select-order") {
                    dispatch(setOrder(li.id));
                }
            })
        })
    })
  }, [dispatch]); 
 
  const showOptions = (id: string) => {
    document.querySelectorAll("ul.select").forEach((d: Element)=>{
      (d as HTMLElement).style.display="none"
    })
    const element = document.getElementById(id);
    if (element === null) return false
      element.style.display="block"
    }

  return (
    <div className='movie-filters-container'> 
        <div className='select-container'>
        <span onClick={() => { showOptions("select-year") }}>Year</span>
            <ul className="select" id="select-year">
                <li>Year</li>
                <li id="2020s">2020s</li>
                <li id="2010s">2010s</li>
                <li id="2000s">2000s</li>
                <li id="1990s">1990s</li>
                <li id="1980s">1980s</li>
                <li id="1970s">1970s</li>
                <li id="1960s">1960s</li>
                <li id="1950s">1950s</li>
                <li id="1940s">1940s</li>
                <li id="1930s">1930s</li>
            </ul>
        </div>
        <div className='select-container'>
        <span onClick={() => { showOptions("select-order") }}>Order</span>
            <ul className="select" id="select-order">
                <li>Order</li>
                <li id="title">Title</li>
                <li id="year">Year</li>
                <li id="rating">Rating</li>
                <li id="popularity">Popularity</li>
            </ul>
        </div>
    </div>
  );
};

export default ActorFilterMovies;