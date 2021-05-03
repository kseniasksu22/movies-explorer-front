import "../SavedMovies/SavedMovies.css";
import Movies from "../Movies/Movies.js";
function SavedMovies (props) {
    return (
        <div className="saved-movies">
<Movies displayOn="saved-movies__button_hidden"/>
        </div>
    )
}

export default SavedMovies;