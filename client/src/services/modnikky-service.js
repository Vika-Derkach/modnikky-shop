import { Service } from "./service";

export default class ModnikkyService extends Service {
  // _imageBase = "https://starwars-visualguide.com/assets/img";

  getClothes = async () => {
    const res = await this.getResourse(`/clothes/`);

    return res.map(this._transformCloses);

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
  getClothesById = async (id) => {
    const clothesById = await this.getResourse(`/clothes/${id}`);
    console.log(clothesById);
    return clothesById;
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

  _transformCloses = (clothes) => {
    return {
      ...clothes,
      id: clothes._id,
    };
  };
}
