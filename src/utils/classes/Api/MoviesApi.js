import Api from "./Api";

export default class MoviesApi extends Api {
  getMovies() {
    return fetch(this._baseUrl, {
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}
