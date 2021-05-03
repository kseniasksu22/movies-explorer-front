import "../Movies/Movies.css";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Preloader from "../Preloader/Preloader.js";
function Movies (props) {
    return (
        <div className="movies">
            <Preloader/>
            <SearchForm/>
            <MoviesCardList displayOn={props.displayOn}/>
        </div>
    )
}

export default Movies;