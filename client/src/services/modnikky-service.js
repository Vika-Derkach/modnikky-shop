export default class ModnikkyService {
  _apiBase = "http://localhost:5000/api";
  // _imageBase = "https://starwars-visualguide.com/assets/img";
  getResourse = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could  not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  };

  getClothes = async () => {
    const res = await this.getResourse(`/clothes/`);
    console.log(res);
    return res;

    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       if (Math.random() > 0.999) {
    //         reject(new Error("Something bad happened"));
    //       } else {
    //         resolve(this.data);
    //       }
    //     }, 700);
    //   });
  };

  // _transformClothes = (clothes) => {
  //   return {
  //     id: this._extractId(clothes),
  //     name: person.name,
  //     gender: person.gender,
  //     birthYear: person.birth_year,
  //     eyeColor: person.eye_color,
  //   };
  // };
}
