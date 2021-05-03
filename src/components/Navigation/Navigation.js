import "../Navigation/Navigation.css";
import { Link } from "react-router-dom";
import HeaderMainLogo from "../../images/icon-main.svg";
function Navigation (props) {
    return ( <div className={`navigation ${
        !props.isOpen ? "" : "navigation_visible"
      }`}>
        <div className="navigation-container">
            <button className="navigation__button-close" onClick={props.onNavBar}></button>
            <div className="navigation-wrapper">
            <Link to="/main" className="navigation__link">Главная</Link>
            <Link to="/movies" className="navigation__link">Фильмы</Link>
            <Link to="/saved-movies" className="navigation__link">Сохранённые фильмы</Link>
        </div>
        <Link to="/profile" className="navigation__link-profile"  onClick={props.onClosePopup}><img className="navigation__icon" src={HeaderMainLogo} alt="Иконка"/>Аккаунт</Link>
        </div>
    </div>
         )
}

export default Navigation;