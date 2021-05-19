export const BASE_URL = "https://api.moviesksu.nomoredomains.club";


export function register(email, password, name) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else return Promise.reject(`${res.status}`);
  });
}

export function login(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else return Promise.reject(`${res.status}`);
  });
}
export function getContent(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else return Promise.reject(`${res.status}`);
  });
}
export function changeInfo(data, token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else return Promise.reject(`${res.status}`);
  });
}

export function getSavedMovies(token) {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
 
      return res.json();
    } else return Promise.reject(`${res.status}`);
  });
}

export const addtoSavedMovie = (data, token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      duration: data.duration,
      nameRU: data.nameRU,
      nameEN: data.nameEN || "name",
      movieId: data.id.toString(),
      description: data.description || "description",
      country: data.country || "country",
      director: data.director || "director",
      image: data.moviesImg,
      trailer: data.trailer || "http://google.com",
      thumbnail: data.thumbnail || "http://google.com",
      year: data.year || "year",
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }  else return Promise.reject(`${res.status}`);
  });
};
export const deleteMovie = (id, token) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else return Promise.reject(`${res.status}`);
  });
};