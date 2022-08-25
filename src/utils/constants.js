import MoviesApi from "./classes/Api/MoviesApi";

const moviesApiUrl = "https://api.nomoreparties.co/beatfilm-movies";
const moviesApiHeaders = {
  "Content-Type": "application/json",
};

const moviesApi = new MoviesApi({
  baseUrl: moviesApiUrl,
  headers: moviesApiHeaders,
});

const imageBaseUrl = "https://api.nomoreparties.co";

export { moviesApi, imageBaseUrl };
