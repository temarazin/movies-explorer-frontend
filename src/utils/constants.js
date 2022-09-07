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
const noImageUrl = "https://picsum.photos/300/200/?blur=10";
const noTrailerBaseUrl = "https://www.youtube.com/results?search_query=трейлер";

const mainApiUrl = "https://api.movie-explorer.temarazin.ru";
const localMainApiUrl = "http://localhost:3001";

const mainApiHeaders = {
  "Content-Type": "application/json",
};

const mainApi = new MainApi({
  baseUrl: mainApiUrl,
  headers: mainApiHeaders,
});

export { moviesApi, imageBaseUrl, mainApi, noImageUrl, noTrailerBaseUrl };
