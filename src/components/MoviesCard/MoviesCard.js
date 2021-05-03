import "../MoviesCard/MoviesCard.css";
import Pic from "../../images/scale_1200.png";
import { Route, Switch } from "react-router-dom";

function MovieCard () {
    function putLike (e) {
       e.target.classList.toggle("movies-card__pic_filled");
    }

    return (
        <Switch>
        <div className="movies-card">
            <div className="movies-card-wrapper">
            <h2 className="movies-card__title">Маленький принц</h2>
            <p className="movies-card__duration">1ч 40мин</p>
            <Route path="/movies"><button className="movies-card__pic movies-card__pic-like" onClick={putLike}></button></Route>
             <Route path="/saved-movies"><button className="movies-card__pic movies-card__pic-delete" ></button></Route>
            </div>
            <img className="movies-card__logo" src={Pic} alt="Превью фильма"/>
        </div>
        </Switch>
    )
}

export default MovieCard;