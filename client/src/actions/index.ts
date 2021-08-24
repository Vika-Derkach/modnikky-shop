import { Dispatch } from "redux";
import ModnikkyService from "../services/modnikky-service";
import { clothesAction, clothesActionTypes } from "../types/actionsTypes";
const clothesRequested = () => {
  return {
    type: clothesActionTypes.FETCH_CLOTHES_REQUEST,
  };
};

const clothesLoaded = (newClothes: any[]) => {
  return {
    type: clothesActionTypes.FETCH_CLOTHES_SUCCESS,
    payload: newClothes,
  };
};

const clothesError = (error: string) => {
  return {
    type: clothesActionTypes.FETCH_CLOTHES_FAILURE,
    payload: error,
  };
};
const onItemSelected = (clothId: number): { type: string; payload: number } => {
  return {
    type: clothesActionTypes.ON_ITEM_SELECTED,
    payload: clothId,
  };
};
const productAddedToBag = (bagProductId: number) => {
  return {
    type: clothesActionTypes.PRODUCT_ADDED_TO_BAG,
    payload: bagProductId,
  };
};
const productRemovedFromBag = (bagProductRemovedId: number) => {
  return {
    type: clothesActionTypes.PRODUCT_REMOVED_FROM_BAG,
    payload: bagProductRemovedId,
  };
};
const productAllRemovedFromBag = (bagProductRemovedId: number) => {
  return {
    type: clothesActionTypes.PRODUCT_ALL_REMOVED_FROM_BAG,
    payload: bagProductRemovedId,
  };
};
///search fillter
const searchClothes = (value: string) => {
  return {
    type: clothesActionTypes.SEARCH_CLOTHES,
    value,
  };
};
const onFilterClothes = (clothName: string) => {
  return {
    type: clothesActionTypes.ON_FILTER_CLOTHES,
    clothName,
  };
};
const onFilterSize = (sizeName: string) => {
  return {
    type: clothesActionTypes.ON_FILTER_SIZE,
    sizeName,
  };
};
const onFilterPrice = (priceName: string) => {
  return {
    type: clothesActionTypes.ON_FILTER_PRICE,
    priceName,
  };
};
const onFilterFabric = (fabricName: string) => {
  return {
    type: clothesActionTypes.ON_FILTER_FABRIC,
    fabricName,
  };
};
const fetchClothes =
  (modnikkyService: ModnikkyService, dispatch: Dispatch<clothesAction>) =>
  async () => {
    dispatch({ type: clothesActionTypes.FETCH_CLOTHES_REQUEST });
    modnikkyService
      .getClothes()
      .then((data) =>
        dispatch({
          type: clothesActionTypes.FETCH_CLOTHES_SUCCESS,
          payload: data,
        })
      )
      .catch((err) =>
        dispatch({
          type: clothesActionTypes.FETCH_CLOTHES_FAILURE,
          payload: err,
        })
      );
  };

export {
  fetchClothes,
  onItemSelected,
  productAddedToBag,
  productRemovedFromBag,
  productAllRemovedFromBag,
  searchClothes,
  onFilterClothes,
  onFilterSize,
  onFilterPrice,
  onFilterFabric,
};
