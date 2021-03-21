const Method = {
  GET: `GET`,
  POST: `POST`,
  PUT: `PUT`,
  DELETE: `DELETE`
};

const toJSON = (response) => {
  return response.json();
};

export default class API {
  constructor(data) {
    this._data = data;
  }

  getCards() {
    return this._load({
      url: this._data
    })
      .then(toJSON)
      .then((data) => {
        return data.guitars;
      });
  }

  _load({url, method = Method.GET, body = null, headers = new Headers()}) {
    return fetch(url, { method, body, headers});
  }
}

const api = new API(`../../data/data.json`);

export {api};
