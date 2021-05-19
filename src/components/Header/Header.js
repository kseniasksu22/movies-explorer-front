import './Header.css';
import HeaderLogo from "../../images/header-logo.svg";
import HeaderMainLogo from "../../images/icon-main.svg";
import React from "react";
import { Link, Route, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";

function Header(props) {
  const history = createBrowserHistory();
    return (
            <header className="header">
     
     <Switch>
       <Route exact path="/">
         <div className="header-container header-main">
       <img className="header__logo" src={HeaderLogo} alt="Лого"/>
     <div className="header-wrapper">
        {!props.isLogged ? (
        <>
        <Link to="/sign-up" className="header__nav-link">Регистрация</Link>
         <Link to="/sign-in" className="header__button">Войти</Link>
         </>)
        : (<>
        <button className="haeder__button-back" onClick={()=>{history.goBack()}}> Назад </button>
        <button className="header__button-exit" onClick={props.onExit}>Выйти</button>
        </>
        )
        }
     </div>
     </div>
     </Route>
     <Route path="/movies">
       <div className="header-container header-movies">
     <img className="header__logo" src={HeaderLogo} alt="Лого"/>
     <div className="header-wrapper header-wrapper_showed">
       <Link to="/movies" className="header__films-link">Фильмы</Link>
       <Link to="/saved-movies" className="header__selected-films-link">Сохраненные фильмы</Link>
       <Link to="/profile" className="header__account-link"><img className="header__icon" src={HeaderMainLogo} alt="Иконка"/>Аккаунт</Link>
       </div>
       <button className="header__navbar-link" onClick={props.onNavbarPopup}></button>
       </div>
     </Route>
     <Route path="/profile">
     <div className="header-container header-profile">
     <img className="header__logo" src={HeaderLogo} alt="Лого"/>
     <div className="header-wrapper header-wrapper_showed">
       <Link to="/movies" className="header__films-link">Фильмы</Link>
       <Link to="/saved-movies" className="header__selected-films-link">Сохраненные фильмы</Link>
       <Link to="/profile" className="header__account-link"><img className="header__icon" src={HeaderMainLogo} alt="Иконка"/>Аккаунт</Link>
       </div>
       <button className="header__navbar-link" onClick={props.onNavbarPopup}></button>
       </div>
     </Route>
     <Route path="/saved-movies">
          <div className="header-container header-profile">
     <img className="header__logo" src={HeaderLogo} alt="Лого"/>
     <div className="header-wrapper header-wrapper_showed">
       <Link to="/movies" className="header__films-link">Фильмы</Link>
       <Link to="/saved-movies" className="header__selected-films-link">Сохраненные фильмы</Link>
       <Link to="/profile" className="header__account-link"><img className="header__icon" src={HeaderMainLogo} alt="Иконка"/>Аккаунт</Link>
       </div>
       <button className="header__navbar-link" onClick={props.onNavbarPopup}></button>
       </div>
     </Route>
     </Switch>
      </header>
  
    );
  }
  
  export default Header;