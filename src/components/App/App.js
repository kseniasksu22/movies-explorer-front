import React from "react";
import { Route, Switch} from "react-router-dom";
import './App.css';
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import Profile from "../Profile/Profile.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Navigation from "../Navigation/Navigation.js";

function App() {

  const [popupOpen, setPopupOpen] = React.useState(false);
  const escCode = 27;
  function openPopup () {
    setPopupOpen(true);
  }
  function closePopup () {
    setPopupOpen(false);
  }
  function escHandle(e) {
    if (e.keyCode === escCode) {
      closePopup();
    }
  }
  function closeByOverlay(e) {
    if (e.target.classList.contains("navigation")) {
      closePopup();
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", escHandle);
    document.addEventListener("mousedown", closeByOverlay);
    return () => {
      document.removeEventListener("keydown", escHandle);
      document.removeEventListener("mousedown", closeByOverlay);
    };
  });
  return (
    <div>
      <Header onNavbarPopup={openPopup}/>
   <Switch>
  <Route exact path="/"><Main/></Route>
  <Route path="/movies"><Movies/></Route>
  <Route path="/saved-movies"><SavedMovies/></Route>
  <Route path="/sign-in"><Login/></Route>
  <Route path="/sign-up"><Register/></Route>
  <Route path="/profile"><Profile></Profile></Route>
  <Route path="*"><NotFoundPage></NotFoundPage></Route>
   </Switch>
   <Navigation isOpen={popupOpen} onNavBar={closePopup} onClosePopup={closePopup}/>
   <Footer/>
    </div>
  );
}

export default App;
