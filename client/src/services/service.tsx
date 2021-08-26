export class Service {
  _apiBase = "http://localhost:5000/api";
  // _imageBase = "https://starwars-visualguide.com/assets/img";
  getResourse = async (url: string) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could  not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  };
}
