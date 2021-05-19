import "../Movies/Movies.css";
import SearchForm from "../SearchForm/SearchForm.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Preloader from "../Preloader/Preloader.js";
function Movies (props) {
    return (
        <div className="movies">
            <Preloader isOpen={props.isOpen}/>
            <SearchForm onSearch={props.onSearch} onShortFilm={props.onShortFilm} onSavedSearch={props.onSavedSearch}/>
            <MoviesCardList isEmpty={props.isEmpty} isEmptySaved={props.isEmptySaved} isLiked={props.isLiked} isMovieSearched={props.isMovieSearched} movieFinded={props.movieFinded} onDisplayOn={props.onDisplayOn} addMovies={props.addMovies} deleteSMovieSaved={props.deleteSMovieSaved}/>
        </div>
    )
}

export default Movies;