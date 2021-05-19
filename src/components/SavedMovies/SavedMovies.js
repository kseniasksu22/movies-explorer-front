import "../SavedMovies/SavedMovies.css";
import Movies from "../Movies/Movies.js";
function SavedMovies (props) {
    return (
        <div className="saved-movies">
<Movies isEmptySaved={props.isEmptySaved} isEmpty={props.isEmpty} onDisplayOn="saved-movies__button_hidden" movieFinded={props.movieFinded} deleteSMovieSaved={props.deleteSMovieSaved} onSavedSearch={props.onSavedSearch}/>
        </div>
    )
}

export default SavedMovies;