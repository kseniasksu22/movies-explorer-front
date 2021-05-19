export const MOVIE_URL = "https://api.nomoreparties.co";

export function getMovies() {
    return fetch(`${MOVIE_URL}/beatfilm-movies`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else return Promise.reject(`${res.status}`);
    });
  }