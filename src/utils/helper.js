import { imageBaseUrl, noImageUrl, noTrailerBaseUrl } from "./constants";

const storage = {
  getItem: (item) => {
    return JSON.parse(localStorage.getItem(item));
  },
  setItem: (item, value) => {
    localStorage.setItem(item, JSON.stringify(value));
  }
}

const formatMovieData = (movie) => {
  const noData = 'н/д';
  const formattedMovie = {
    country: movie.country || noData,
    director: movie.director || noData,
    duration: parseInt(movie.duration) || 0,
    year: movie.year || noData,
    description: movie.description || noData,
    image: imageBaseUrl + movie.image.url || noImageUrl,
    trailerLink: movie.trailerLink || `${noTrailerBaseUrl}+${movie.nameRU || movie.nameEN}`,
    thumbnail: imageBaseUrl + movie.image.formats.thumbnail.url || noImageUrl,
    movieId: parseInt(movie.id),
    nameRU: movie.nameRU || movie.nameEN,
    nameEN: movie.nameEN || movie.nameRU,
  }

  return formattedMovie;
}

export {storage, formatMovieData};
