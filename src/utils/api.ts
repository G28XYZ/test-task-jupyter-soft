import { moviesApiAddress } from "./constants";

class Api {
  _address: string;
  _headers: HeadersInit;

  constructor(address: string) {
    this._address = address;
    this._headers = {
      "Content-type": "application/json",
    };
  }

  _handleResponse(response: Response) {
    return response.ok ? response.json() : Promise.reject(response.status);
  }

  async getMovies() {
    return await fetch(`${this._address}/beatfilm-movies`).then(
      this._handleResponse
    );
  }
}

const api = new Api(moviesApiAddress);

export default api;
