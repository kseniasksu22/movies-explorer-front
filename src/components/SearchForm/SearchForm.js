import "../SearchForm/SearchForm.css";
import React from "react";
import SearchIcon from "../../images/search-icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import { Route, Switch} from "react-router-dom";
function SearchForm(props) {
const [text, settext] = React.useState("");

const handleChange = (e) => {
    settext(e.target.value)
  };

  const handleMovieSubmit = (e) => {
      e.preventDefault();
      const checked = e.target.form.hidcheck.checked;
      props.onSearch(text, checked);
  }

  const handleSavedMovieSubmit = (e) => {
       e.preventDefault();
       const checked = e.target.form.hidcheck.checked;
       console.log(checked);
        props.onSavedSearch(text,checked);
     
  }
    return (
        <div className="search-form">   
     <form className="search-form-container">
           <img className="search-form__icon" src={SearchIcon} alt="Поиск"/>  
             <input type="text" className="search-form__input" name="search-form" placeholder="Фильм" onChange={handleChange} required/>
             <Switch>
               <Route path="/movies">
             <button className="search-form__button" type="submit" onClick={handleMovieSubmit}>Найти</button>
             </Route>
             <Route path="/saved-movies">
             <button className="search-form__button" type="submit" onClick={handleSavedMovieSubmit}>Найти</button>
             </Route>
             </Switch>
  
     <div className="search-form-filterbox-container"><FilterCheckbox/></div>
    </form>
   
        </div>
    )
}

export default SearchForm;