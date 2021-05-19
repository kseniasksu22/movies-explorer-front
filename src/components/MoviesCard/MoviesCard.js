import "../MoviesCard/MoviesCard.css";
import { Route, Switch } from "react-router-dom";

function MovieCard (props) {

    const {
        nameRU, duration, moviesImg, image,saved
      } = props.datamov; 


    function putLike (e) {

if(e.target.classList.contains("movies-card__pic_filled")){    
    props.deleteSMovieSaved(props.datamov);
   
} else {
    props.addMovies(props.datamov);
  
}
      
    }

    function deleteMovie (e) {
        e.preventDefault();
 
        props.deleteSMovieSaved(props.datamov);

    }



    return (
       
        <div className="movies-card">
            <div className="movies-card-wrapper">
            <h2 className="movies-card__title">{nameRU}</h2>
            <p className="movies-card__duration">{duration} мин</p>
            <Switch>
            <Route path="/movies"><button  className={`movies-card__pic movies-card__pic-like ${saved ? "movies-card__pic_filled" : ""}`} onClick={putLike}></button></Route>
             <Route path="/saved-movies"><button className="movies-card__pic movies-card__pic-delete" onClick={deleteMovie}></button></Route>
             </Switch>
            </div>
            <img className="movies-card__logo" src={moviesImg||image} alt="Превью фильма"/>
        </div>
       
    )
}

export default MovieCard;