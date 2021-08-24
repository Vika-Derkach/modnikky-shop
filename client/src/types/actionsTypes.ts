export enum clothesActionTypes {
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
  type: clothesActionTypes.FETCH_CLOTHES_REQUEST;
}
interface clothesLoadedAction {
  type: clothesActionTypes.FETCH_CLOTHES_SUCCESS;
  payload: any[];
}
interface clothesErrorAction {
  type: clothesActionTypes.FETCH_CLOTHES_FAILURE;
  payload: string;
}
interface onItemSelectedAction {
  type: clothesActionTypes.ON_ITEM_SELECTED;
  payload: number;
}
interface productAddedToBagAction {
  type: clothesActionTypes.PRODUCT_ADDED_TO_BAG;
  payload: number;
}
interface productRemovedFromBagAction {
  type: clothesActionTypes.PRODUCT_REMOVED_FROM_BAG;
  payload: number;
}
interface productAllRemovedFromBagAction {
  type: clothesActionTypes.PRODUCT_ALL_REMOVED_FROM_BAG;
  payload: number;
}
interface searchClothesAction {
  type: clothesActionTypes.SEARCH_CLOTHES;
  value: string;
}
interface onFilterClothesAction {
  type: clothesActionTypes.ON_FILTER_CLOTHES;
  clothName: string;
}
interface onFilterSizeAction {
  type: clothesActionTypes.ON_FILTER_SIZE;
  sizeName: string;
}
interface onFilterPriceAction {
  type: clothesActionTypes.ON_FILTER_PRICE;
  priceName: string;
}
interface onFilterFabricAction {
  type: clothesActionTypes.ON_FILTER_FABRIC;
  fabricName: string;
}
export type clothesAction =
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
