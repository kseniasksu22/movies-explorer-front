import "../MoviesCardList/MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";
function MoviesCardList (props) {
return (
    <div className="movies-card-container">
    <template className="movies-card-list">
    <MoviesCard/>
    <MoviesCard/>
    <MoviesCard/>
    <MoviesCard/>
    <MoviesCard/>
    <MoviesCard/>
    <MoviesCard/>
    
    </template>
    <button className={`movies-card-list__button ${props.displayOn}`} >Ещё</button>
    </div>
)
}

export default MoviesCardList;