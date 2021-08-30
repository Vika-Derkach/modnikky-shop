import { Dispatch } from "redux";
import ModnikkyService from "../services/modnikky-service";
import { ClothesAction, IClothesAction } from "../types/actionsTypes";
const clothesRequested = () => {
  return {
    type: IClothesAction.FETCH_CLOTHES_REQUEST,
  };
};

const clothesLoaded = (newClothes: any[]) => {
  return {
    type: IClothesAction.FETCH_CLOTHES_SUCCESS,
    payload: newClothes,
  };
};

const clothesError = (error: string) => {
  return {
    type: IClothesAction.FETCH_CLOTHES_FAILURE,
    payload: error,
  };
};
const onItemSelected = (clothId: number): { type: string; payload: number } => {
  return {
    type: IClothesAction.ON_ITEM_SELECTED,
    payload: clothId,
  };
};
const productAddedToBag = (bagProductId: number) => {
  return {
    type: IClothesAction.PRODUCT_ADDED_TO_BAG,
    payload: bagProductId,
  };
};
const productRemovedFromBag = (bagProductRemovedId: number) => {
  return {
    type: IClothesAction.PRODUCT_REMOVED_FROM_BAG,
    payload: bagProductRemovedId,
  };
};
const productAllRemovedFromBag = (bagProductRemovedId: number) => {
  return {
    type: IClothesAction.PRODUCT_ALL_REMOVED_FROM_BAG,
    payload: bagProductRemovedId,
  };
};
///search fillter
const searchClothes = (value: string) => {
  return {
    type: IClothesAction.SEARCH_CLOTHES,
    value,
  };
};
const onFilterClothes = (clothName: string) => {
  return {
    type: IClothesAction.ON_FILTER_CLOTHES,
    clothName,
  };
};
const onFilterSize = (sizeName: string) => {
  return {
    type: IClothesAction.ON_FILTER_SIZE,
    sizeName,
  };
};
const onFilterPrice = (priceName: string) => {
  return {
    type: IClothesAction.ON_FILTER_PRICE,
    priceName,
  };
};
const onFilterFabric = (fabricName: string) => {
  return {
    type: IClothesAction.ON_FILTER_FABRIC,
    fabricName,
  };
};
const fetchClothes =
  (modnikkyService: ModnikkyService, dispatch: Dispatch<ClothesAction>) =>
  async () => {
    dispatch({ type: IClothesAction.FETCH_CLOTHES_REQUEST });
    modnikkyService
      .getClothes()
      .then((data) =>
        dispatch({
          type: IClothesAction.FETCH_CLOTHES_SUCCESS,
          payload: data,
        })
      )
      .catch((err) =>
        dispatch({
          type: IClothesAction.FETCH_CLOTHES_FAILURE,
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
