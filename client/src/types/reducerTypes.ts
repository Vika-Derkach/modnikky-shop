export interface IApplicationState {
  clothesFromDb: any[];
  clothes: any[];
  loading: boolean;
  error: null | string;
  selectedItem: any;
  productItems: any[];
  bagItems: any[];
  orderTotal: number;
  orderTotalPrice: number;
  searchClothesValue: string;
  filterClothes: string;
  filterSize: string;
  filterPrice: string;
  filterFabric: string;
  lookPicture: string;
  lookPictureSecond: string;
  //   todos: any[];
  //   loading: boolean;
  //   error: null | string;
  //   page: number;
  //   limit: number;
}
export interface IClothesItem {
  id: number;
  title: string;
  price: number;
  frontPicture: string;
  additionalPicture: string;
  fabric: string;
  product_descr: string;
  color: string;

  kind: string;
  size: string;
}
export interface IClothasItemTypesWithOldId extends IClothesItem {
  _id: number;
}
export interface IBagProductItem {
  id: number;
  title: string;
  frontPicture: string;
  price: number;
  color: string;
  count: number;
  size: string;
}
