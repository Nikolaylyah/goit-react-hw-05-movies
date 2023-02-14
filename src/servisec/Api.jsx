const API_KEY = 'b380555e67634a1415a3aefaff7f3f8c';
const BASE_URL = 'https://api.themoviedb.org/3';

export function fetchTrending() {
  const URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
  return fetch(URL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Something went wrong!`));
    })
    .then(response => {
      return response.results;
    });
}

export function fetchMovie(movieId) {
  const URL = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
  return fetch(URL).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Something weent wrong!`));
  });
}

export function fetchMovieCast(movieId) {
  const URL = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
  return fetch(URL).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Something weent wrong!`));
  });
}

export function fetchMovieReview(movieId) {
  const URL = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`;
  return fetch(URL).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Something weent wrong!`));
  });
}

export function fetchQuery(query) {
  const URL = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
  return fetch(URL)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Something weent wrong!`));
    })
    .then(response => {
      return response.results;
    });
}
