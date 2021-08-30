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
interface clothesRequestedAction {
  type: IClothesAction.FETCH_CLOTHES_REQUEST;
}
interface clothesLoadedAction {
  type: IClothesAction.FETCH_CLOTHES_SUCCESS;
  payload: any[];
}
interface clothesErrorAction {
  type: IClothesAction.FETCH_CLOTHES_FAILURE;
  payload: string;
}
interface onItemSelectedAction {
  type: IClothesAction.ON_ITEM_SELECTED;
  payload: number;
}
interface productAddedToBagAction {
  type: IClothesAction.PRODUCT_ADDED_TO_BAG;
  payload: number;
}
interface productRemovedFromBagAction {
  type: IClothesAction.PRODUCT_REMOVED_FROM_BAG;
  payload: number;
}
interface productAllRemovedFromBagAction {
  type: IClothesAction.PRODUCT_ALL_REMOVED_FROM_BAG;
  payload: number;
}
interface searchClothesAction {
  type: IClothesAction.SEARCH_CLOTHES;
  value: string;
}
interface onFilterClothesAction {
  type: IClothesAction.ON_FILTER_CLOTHES;
  clothName: string;
}
interface onFilterSizeAction {
  type: IClothesAction.ON_FILTER_SIZE;
  sizeName: string;
}
interface onFilterPriceAction {
  type: IClothesAction.ON_FILTER_PRICE;
  priceName: string;
}
interface onFilterFabricAction {
  type: IClothesAction.ON_FILTER_FABRIC;
  fabricName: string;
}
export type ClothesAction =
  | clothesRequestedAction
  | clothesLoadedAction
  | clothesErrorAction
  | onItemSelectedAction
  | productAddedToBagAction
  | productRemovedFromBagAction
  | productAllRemovedFromBagAction
  | searchClothesAction
  | onFilterClothesAction
  | onFilterSizeAction
  | onFilterPriceAction
  | onFilterFabricAction;
