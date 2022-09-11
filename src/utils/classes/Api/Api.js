export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return res.json().then((data) => {
      const message = data?.validation?.body?.message || data?.message || 'Неизвестная ошибка';
      return Promise.reject(message);
    });
  }
}
