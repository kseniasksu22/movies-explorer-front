import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
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
import { getMovies } from "../../utils/MainApi.js";
import { register, login, getContent, changeInfo, getSavedMovies, addtoSavedMovie, deleteMovie } from "../../utils/MoviesExplorerApi.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import { CurrentUserContext } from "../../context/CurrentUserContext.js";


function App() {
  
  const [popupOpen, setPopupOpen] = React.useState(false);
  const escCode = 27;
  const history = useHistory();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [finedMovies, setFinedMovies] = React.useState([]);
  const [isLoaderVisible, setISLoaderVisible] = React.useState(false);
  const [isSearched, setIsSearched] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [isContainerEmpty, setIsContainerEmpty] = React.useState(true);
  const [isContainerEmptySaved, setIsContainerEmptySaved] = React.useState(true);

  function chekSaved() {}
  chekSaved();

  function openPopup() {
      setPopupOpen(true);
  }

  function closePopup() {
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

  function getTokens() {
      return localStorage.getItem("token");
  }
  //виведденя інфи з токена
  React.useEffect(() => {
      if (loggedIn) {
          const token = getTokens();
          Promise.all([getContent(token)])
              .then((values) => {
                  const [userData] = values;
                  setCurrentUser(userData.data);
              })
              .catch((err) => {
                  console.log(err);
              });
      }
  }, [loggedIn]);
  //виведення 100 фільмів
  function handleMovies() {
      setISLoaderVisible(true);
      getMovies().then((res) => {
          const allMovies = res.map((movie) => {
              const moviesImg = `https://api.nomoreparties.co${ movie.image ? movie.image.url : null }`
              return {
                  ...movie,
                  moviesImg
              };
          })
          setMovies(allMovies);
          localStorage.setItem("allMovies", JSON.stringify(allMovies));
      }).catch((err) => {
          console.log(err)
      }).finally(() => {
          setISLoaderVisible(false);
      });
  }
  React.useEffect(() => {
      const moviesArray = JSON.parse(localStorage.getItem("allMovies"));
      if (moviesArray) {
          setMovies(moviesArray);
      } else {
          handleMovies();
      }
  }, [])
  const handleMovieSearch = (text, checked) => {
      let dataSave = JSON.parse(localStorage.getItem('allMovies'));
      setIsSearched(true);
      let data = movies.filter((item) => {
          const movieCardName = item.nameRU || item.nameEn;
          return movieCardName.match(text)
      });
      data[0] ? setIsContainerEmpty(true) : setIsContainerEmpty(false);
      data = handleShortFilm(data, checked);
      const newMovies = data.map(
          (item) => {
              return item = Object.assign(item, {
                  saved: dataSave.some((itemSaved) => itemSaved.movieId == item.id),
              });
          }
      );
      return setFinedMovies(newMovies);
  }
  const handleSavdMoviesSearch = (text, checked) => {
      setIsSearched(true);
      let dataSave = JSON.parse(localStorage.getItem('moviesSaved'));
      dataSave = dataSave.filter((item) => {
          let movieCardName = item.nameRU || item.nameEn;
          if (!movieCardName.match(text)) {
              setIsContainerEmptySaved(false);
          } else {
              setIsContainerEmptySaved(true);
          }
          return movieCardName.match(text);
      });
      dataSave = handleShortFilm(dataSave, checked);
      return setSavedMovies(dataSave);
  }
  const handleShortFilm = (mov, checked) => {
      if (checked) {
          return mov.filter(movie => movie.duration < 40);
      } else return mov
  }
  const handleSavedMovies = () => {
      getSavedMovies(getTokens()).then((data) => {
          localStorage.setItem('moviesSaved', JSON.stringify(data));
          setSavedMovies(JSON.parse(localStorage.getItem('moviesSaved')));
      }).catch((err) => {
          console.log(err);
      });
  }
  const addMovie = (movie) => {
      addtoSavedMovie(movie, getTokens()).then(res => {
          let moviesSavedStorige = JSON.parse(localStorage.getItem('moviesSaved'));
          moviesSavedStorige.push({
              ...res.data,
              id: res.data.movieId
          });
          localStorage.setItem('moviesSaved', JSON.stringify(moviesSavedStorige));
          setSavedMovies(moviesSavedStorige);
          // new new new
          const chaneMovies = movies.map(
              (c) => (c.id === movie.id ? Object.assign(c, {
                  saved: true
              }) : c),
          );
          setMovies(chaneMovies);
      }).catch((err) => {
          console.log(err);
      })
  };

  function deleteSavedMovie(movie) {
      const moviesSavedStorige = JSON.parse(localStorage.getItem('moviesSaved'));
      if (!movie._id) {
          movie = moviesSavedStorige.filter((i) => i.movieId == movie.id)[0];
      }
      deleteMovie(movie._id, getTokens()).then((res) => {
          const changedSavedMovies = moviesSavedStorige.filter((itemMovie) => {
              return itemMovie.movieId != movie.movieId;
          });
          setSavedMovies(changedSavedMovies);
          localStorage.setItem('moviesSaved', JSON.stringify(changedSavedMovies));
          const chaneMovies = movies.map(
              (c) => (c.id == movie.movieId ? Object.assign(c, {
                  saved: false
              }) : c),
          );
          setMovies(chaneMovies);
      })
  }
  React.useEffect(() => {
      document.addEventListener("keydown", escHandle);
      document.addEventListener("mousedown", closeByOverlay);
      return () => {
          document.removeEventListener("keydown", escHandle);
          document.removeEventListener("mousedown", closeByOverlay);
      };
  });

  function handleUpdateUser(data) {
      changeInfo(data, getTokens())
          .then((res) => {
              setCurrentUser(res.data)
          })
          .catch((err) => {
              console.error(err);
          });
  }

  function handleLogin(email, password) {
      login(email, password)
          .then((data) => {
              if (data.token) {
                  setLoggedIn(true);
                  localStorage.setItem("token", data.token);
                  history.push("/movies");
              }
          })
          .catch((err) => {
              if (err == 400) {
                  setMessage("Неправильно передан емейл или пароль");
              } else if (err == 401) {
                  setMessage("Неправильная почта или пароль");
              }
          });
  }

  const tokenCheck = React.useCallback(() => {
      const token = localStorage.getItem("token");
      if (token) {
          getContent(token)
              .then((res) => {
                  if (res) {
                      setLoggedIn(true);
                      history.push("/movies");
                      handleSavedMovies()
                  }
              })
              .catch((error) => {
                  if (error === 400) {
                      console.log("Переданный токен некорректен");
                  } else if (error === 401) {
                      console.log("Токен не передан или передан не в том формате");
                  }
              });
      }
  }, [history]);
  React.useEffect(() => {
      tokenCheck();
  }, [history, tokenCheck]);

  function handleRegister(email, password, name) {
      register(email, password, name)
          .then((res) => {
              if (res) {
                  history.push("/sign-in");
              }
          })
          .catch((err) => {
              if (err == 400) {
                  setMessage("Неккоректно заполнено одно из полей.");
              } else if (err == 409) {
                  setMessage("Пользователь с такой почтой уже есть.")
              }
          });
  }

  function signOut() {
      localStorage.removeItem("token");
      setLoggedIn(false);
      history.push("/");
  }
  return (
<>
<CurrentUserContext.Provider value={currentUser}>
   <Header onNavbarPopup={openPopup} isLogged={loggedIn} onExit={signOut}/>
   <Switch>
      <Route exact path="/">
         <Main/>
      </Route>
      <Route path="/movies">
         <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            onSearch={handleMovieSearch}
            movieFinded={finedMovies}
            onShortFilm={handleShortFilm}
            isOpen={isLoaderVisible}
            addMovies={addMovie}
            deleteSMovieSaved={deleteSavedMovie}
            isMovieSearched={isSearched}
            isEmpty={isContainerEmpty} 
            ></ProtectedRoute>
      </Route>
      <Route path="/saved-movies">
         <ProtectedRoute 
            path="/saved-movies"
            isEmptySaved={isContainerEmptySaved}
            loggedIn={loggedIn}
            component={SavedMovies}
            movieFinded={savedMovies}
            deleteSMovieSaved={deleteSavedMovie}
            onSavedSearch={handleSavdMoviesSearch}
            >
         </ProtectedRoute>
      </Route>
      <Route path="/profile">
         <ProtectedRoute 
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            onLogOut={signOut}
            onUpdateUser={handleUpdateUser}
            >
         </ProtectedRoute>
      </Route>
      <Route path="/sign-in">
         <Login handleLogin={handleLogin} message={message} setMsg={()=>
         {setMessage("")}}/>
      </Route>
      <Route path="/sign-up">
         <Register  handleRegister={handleRegister} message={message} setMsg={()=>
         {setMessage("")}}/>
      </Route>
      <Route path="*">
         <NotFoundPage></NotFoundPage>
      </Route>
   </Switch>
   <Navigation isOpen={popupOpen} onNavBar={closePopup} onClosePopup={closePopup}/>
   <Footer/>
</CurrentUserContext.Provider>
</>
);
}
export default App;