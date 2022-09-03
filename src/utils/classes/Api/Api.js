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
    // res.json().next((data) => {throw new Error('adad')})
    // throw new Error('adad')


    // res.json().next((data) => {
    //   console.log(data);
    //   Promise.reject(`Ошибка: ${res.status}`);
    // });

    // return Promise.reject(res.json().next((data) => {return data.message}));
    // return a.message;
    //Promise.reject(`Ошибка: ${res.status}`);
  }
}
