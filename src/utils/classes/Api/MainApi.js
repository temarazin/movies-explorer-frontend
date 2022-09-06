import Api from "./Api";

export default class MainApi extends Api {
  signIn(data) {
    return fetch(this._baseUrl + "/signin", {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  signUp(data) {
    return fetch(this._baseUrl + "/signup", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  logout() {
    return fetch(this._baseUrl + "/logout", {
      method: "POST",
      credentials: "include",
      headers: this._headers,
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  getUser() {
    return fetch(this._baseUrl + "/users/me", {
      method: "GET",
      headers: this._headers,
      credentials: "include",
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  updateUser(data) {
    return fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: this._headers,
      credentials: "include",
      body: JSON.stringify(data),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}
