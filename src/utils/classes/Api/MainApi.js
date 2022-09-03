import Api from "./Api";

export default class MainApi extends Api {
  signIn(data) {
    return fetch(this._baseUrl + "/signin", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then((res) => {
        return this._checkResponse(res);
      })
  }

  signUp(data) {
    console.log(data);
    return fetch(this._baseUrl + "/signup", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .catch((e) => console.log(e));
  }
}
