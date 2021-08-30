export enum IClothesAction {
  FETCH_CLOTHES_REQUEST = "FETCH_CLOTHES_REQUEST",
  FETCH_CLOTHES_SUCCESS = "FETCH_CLOTHES_SUCCESS",
  FETCH_CLOTHES_FAILURE = "FETCH_CLOTHES_FAILURE",
  ON_ITEM_SELECTED = "ON_ITEM_SELECTED",

  PRODUCT_ADDED_TO_BAG = "PRODUCT_ADDED_TO_BAG",
  PRODUCT_REMOVED_FROM_BAG = "PRODUCT_REMOVED_FROM_BAG",
  PRODUCT_ALL_REMOVED_FROM_BAG = "PRODUCT_ALL_REMOVED_FROM_BAG",
  SEARCH_CLOTHES = "SEARCH_CLOTHES",
  ON_FILTER_CLOTHES = "ON_FILTER_CLOTHES",

  ON_FILTER_SIZE = "ON_FILTER_SIZE",
  ON_FILTER_PRICE = "ON_FILTER_PRICE",
  ON_FILTER_FABRIC = "ON_FILTER_FABRIC",
}
interface ClothesRequestedAction {
  type: IClothesAction.FETCH_CLOTHES_REQUEST;
}
interface ClothesLoadedAction {
  type: IClothesAction.FETCH_CLOTHES_SUCCESS;
  payload: any[];
}
interface ClothesErrorAction {
  type: IClothesAction.FETCH_CLOTHES_FAILURE;
  payload: string;
}
interface OnItemSelectedAction {
  type: IClothesAction.ON_ITEM_SELECTED;
  payload: number;
}
interface ProductAddedToBagAction {
  type: IClothesAction.PRODUCT_ADDED_TO_BAG;
  payload: number;
}
interface ProductRemovedFromBagAction {
  type: IClothesAction.PRODUCT_REMOVED_FROM_BAG;
  payload: number;
}
interface ProductAllRemovedFromBagAction {
  type: IClothesAction.PRODUCT_ALL_REMOVED_FROM_BAG;
  payload: number;
}
interface SearchClothesAction {
  type: IClothesAction.SEARCH_CLOTHES;
  value: string;
}
interface OnFilterClothesAction {
  type: IClothesAction.ON_FILTER_CLOTHES;
  clothName: string;
}
interface OnFilterSizeAction {
  type: IClothesAction.ON_FILTER_SIZE;
  sizeName: string;
}
interface OnFilterPriceAction {
  type: IClothesAction.ON_FILTER_PRICE;
  priceName: string;
}
interface OnFilterFabricAction {
  type: IClothesAction.ON_FILTER_FABRIC;
  fabricName: string;
}
export type ClothesAction =
  | ClothesRequestedAction
  | ClothesLoadedAction
  | ClothesErrorAction
  | OnItemSelectedAction
  | ProductAddedToBagAction
  | ProductRemovedFromBagAction
  | ProductAllRemovedFromBagAction
  | SearchClothesAction
  | OnFilterClothesAction
  | OnFilterSizeAction
  | OnFilterPriceAction
  | OnFilterFabricAction;
