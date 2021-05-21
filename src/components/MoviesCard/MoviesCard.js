import React from "react";
import "../MoviesCard/MoviesCard.css";
import { Route, Switch } from "react-router-dom";


function MovieCard (props) {
    const [isSaved, setSaved] = React.useState(props.datamov.saved);

    const {
        nameRU, duration, moviesImg, image,saved
      } = props.datamov; 
   

      React.useEffect(() => {
        props.datamov.saved = isSaved; 
    }, [isSaved]);

    function putLike (e) {
        e.preventDefault();

if(e.target.classList.contains("movies-card__pic_filled")){  
 //   e.target.classList.remove("movies-card__pic_filled");
 setSaved(false);
    props.deleteSMovieSaved(props.datamov);
   
   
} else {
   // e.target.classList.add("movies-card__pic_filled");
   setSaved(true);
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
            <Route path="/movies"><button  className={`movies-card__pic movies-card__pic-like ${isSaved ? "movies-card__pic_filled" : ""}`} onClick={putLike}></button></Route>
             <Route path="/saved-movies"><button className="movies-card__pic movies-card__pic-delete" onClick={deleteMovie}></button></Route>
             </Switch>
            </div>
            <img className="movies-card__logo" src={moviesImg||image} alt="Превью фильма"/>
        </div>
       
    )
}

export default MovieCard;