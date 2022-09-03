import MoviesApi from "./classes/Api/MoviesApi";
import MainApi from "./classes/Api/MainApi";

const moviesApiUrl = "https://api.nomoreparties.co/beatfilm-movies";
const moviesApiHeaders = {
  "Content-Type": "application/json",
};

const moviesApi = new MoviesApi({
  baseUrl: moviesApiUrl,
  headers: moviesApiHeaders,
});

const imageBaseUrl = "https://api.nomoreparties.co";

const mainApiUrl = "https://api.movie-explorer.temarazin.ru";
const localMainApiUrl = "http://localhost:3001"

const mainApiHeaders = {
  "Content-Type": "application/json",
};

const mainApi = new MainApi({
  baseUrl: localMainApiUrl,
  headers: mainApiHeaders,
})

export { moviesApi, imageBaseUrl, mainApi };
