import "../SearchForm/SearchForm.css";
import SearchIcon from "../../images/search-icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
function SearchForm() {
    return (
        <div className="search-form">   
     <form className="search-form-container">
           <img className="search-form__icon" src={SearchIcon} alt="Поиск"/>  
             <input className="search-form__input" placeholder="Фильм" required/>
             <button className="search-form__button" type="submit">Найти</button>
     <div className="search-form-fil"><FilterCheckbox/></div>
    </form>
         <div className="search-form-filterbox-container"><FilterCheckbox/></div>
        </div>
    )
}

export default SearchForm;