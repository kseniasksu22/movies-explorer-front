import "../MoviesCard/MoviesCard.css";
import Pic from "../../images/scale_1200.png";
function MovieCard () {
    function putLike (e) {
       e.target.classList.toggle("movies-card__like_filled");
    }

    return (
        <div className="movies-card">
            <div className="movies-card-wrapper">
            <h2 className="movies-card__title">Маленький принц</h2>
            <p className="movies-card__duration">1ч 40мин</p>
            <button className="movies-card__like" onClick={putLike}></button>
            </div>
            <img className="movies-card__logo" src={Pic} alt="Превью фильма"/>
        </div>
    )
}

export default MovieCard;