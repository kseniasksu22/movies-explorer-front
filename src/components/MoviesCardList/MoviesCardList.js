import React from "react";
import "../MoviesCardList/MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";
import {Switch, Route} from "react-router-dom";
function MoviesCardList (props) {

const numberMoviesToAdd = 3; 
const [moviesToRender, setMoviesToRender] = React.useState([]);

const handleChange = (e) => {
    e.preventDefault();
    setMoviesToRender(props.movieFinded.slice(0, moviesToRender.length + numberMoviesToAdd));
        if (moviesToRender.length >= props.movieFinded.length - numberMoviesToAdd) {
         e.target.classList.add("movies-card-list__button_hidden")
        }
}

React.useEffect(() => {
        setMoviesToRender(props.movieFinded.slice(0, numberMoviesToAdd));
        if (props.movieFinded.length <= numberMoviesToAdd) {
        document.querySelector(".movies-card-list__button").classList.add("movies-card-list__button_hidden")
        } else {
            document.querySelector(".movies-card-list__button").classList.remove("movies-card-list__button_hidden")
        };
    }, [props.movieFinded, numberMoviesToAdd])
    return (
    <div className="movies-card-container">
    <template className="movies-card-list">
        <Switch>
            <Route path="/movies">
             {moviesToRender.map((item)=>{
              return <MoviesCard datamov={item} addMovies={props.addMovies} key={item.id}  deleteSMovieSaved={props.deleteSMovieSaved} isLiked={props.isLiked}/>  
 }) 
 }
             { props.isEmpty ? "" : <span className="movies-card-list__text">Похоже, ничего не найдено. Попробуйте ввести другое слово или просто букву</span> }
         </Route>
         <Route path="/saved-movies">
             {props.movieFinded.map((item)=>{
             return  <MoviesCard datamov={item} addMovies={props.addMovies}   key={item.id} id= {item.id} deleteSMovieSaved={props.deleteSMovieSaved}/>
}) 
}
            { props.isEmptySaved ? "" : <span className="movies-card-list__text">Похоже, ничего не найдено. Попробуйте ввести другое слово или просто букву</span> }
       </Route>
       </Switch>
    </template>
    <button className={`movies-card-list__button ${props.onDisplayOn}` } onClick={handleChange}>{`${props.isMovieSearched ? "Ещё" : "Попробуйте найти фильм"}`}</button>
    </div>
)
}


export default MoviesCardList;