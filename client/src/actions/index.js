import { clothesAction } from "../actionTypes";

const clothesRequested = () => {
  return {
    type: clothesAction.FETCH_CLOTHES_REQUEST,
  };
};

const clothesLoaded = (newClothes) => {
  return {
    type: clothesAction.FETCH_CLOTHES_SUCCESS,
    payload: newClothes,
  };
};

const clothesError = (error) => {
  return {
    type: clothesAction.FETCH_CLOTHES_FAILURE,
    payload: error,
  };
};
const onItemSelected = (clothId) => {
  return {
    type: clothesAction.ON_ITEM_SELECTED,
    payload: clothId,
  };
};
const productAddedToBag = (bagProductId) => {
  return {
    type: clothesAction.PRODUCT_ADDED_TO_BAG,
    payload: bagProductId,
  };
};
const productRemovedFromBag = (bagProductRemovedId) => {
  return {
    type: clothesAction.PRODUCT_REMOVED_FROM_BAG,
    payload: bagProductRemovedId,
  };
};
const productAllRemovedFromBag = (bagProductRemovedId) => {
  return {
    type: clothesAction.PRODUCT_ALL_REMOVED_FROM_BAG,
    payload: bagProductRemovedId,
  };
};
///search fillter
const searchClothes = (value) => {
  return {
    type: clothesAction.SEARCH_CLOTHES,
    value,
  };
};
const onFilterClothes = (clothName) => {
  return {
    type: clothesAction.ON_FILTER_CLOTHES,
    clothName,
  };
};
const onFilterSize = (sizeName) => {
  return {
    type: clothesAction.ON_FILTER_SIZE,
    sizeName,
  };
};
const onFilterPrice = (priceName) => {
  return {
    type: clothesAction.ON_FILTER_PRICE,
    priceName,
  };
};
const onFilterFabric = (fabricName) => {
  return {
    type: clothesAction.ON_FILTER_FABRIC,
    fabricName,
  };
};
// const fetchClothes = (modnikkyService, dispatch) => async () => {
//   dispatch(clothesRequested());
//   modnikkyService
//     .getClothes()
//     .then((data) => dispatch(clothesLoaded(data)))
//     .catch((err) => dispatch(clothesError(err)));
// };

export {
  clothesRequested,
  clothesLoaded,
  clothesError,
  // fetchClothes,
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
