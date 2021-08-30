import { ClothesAction, IClothesAction } from "../types/actionsTypes";
import { IApplicationState, IClothesItem } from "../types/reducerTypes";
import {
  filter,
  filterFabrics,
  filterPrizes,
  filterSizes,
  scrollToTop,
  updateOrder,
} from "./functionsReducer";
const initialState: IApplicationState = {
  clothesFromDb: [],
  clothes: [],
  loading: true,
  error: null,
  selectedItem: null,
  productItems: [],
  bagItems: [],
  orderTotal: 0,
  orderTotalPrice: 0,
  searchClothesValue: "",
  filterClothes: "",
  filterSize: "",
  filterPrice: "",
  filterFabric: "",
  lookPicture: "",
  lookPictureSecond: "",
};

const reducer = (
  state = initialState,
  action: ClothesAction
): IApplicationState => {
  console.log(action.type);

  switch (action.type) {
    case IClothesAction.FETCH_CLOTHES_REQUEST:
      return {
        ...state,
        clothes: [],
        clothesFromDb: [],
        loading: true,
        error: null,
      };
    case IClothesAction.FETCH_CLOTHES_SUCCESS:
      return {
        ...state,
        clothes: action.payload,
        clothesFromDb: action.payload,
        loading: false,
        error: null,
      };
    case IClothesAction.FETCH_CLOTHES_FAILURE:
      return {
        ...state,
        clothes: [],
        loading: false,
        error: action.payload,
      };
    case IClothesAction.ON_ITEM_SELECTED:
      scrollToTop();
      const clothId = action.payload;
      const cloth = state.clothesFromDb.find(
        (cloth): boolean => cloth.id === clothId
      );
      const newItem = {
        id: cloth.id,
        title: cloth.title,
        frontPicture: cloth.frontPicture,
        additionalPicture: cloth.additionalPicture,
        fabric: cloth.fabric,
        product_descr: cloth.product_descr,
        price: cloth.price,
        color: cloth.color,
        kind: cloth.kind,
        size: cloth.size,
      };
      const newLookPicture = state.clothesFromDb.find(
        (cloth): boolean =>
          // cloth.frontPicture !== newItem.frontPicture &&
          cloth.kind !== newItem.kind
      );
      const newLookPictureSecond = state.clothesFromDb.find(
        (cloth): boolean =>
          cloth.kind !== newItem.kind && cloth.kind !== newLookPicture.kind
      );

      return {
        ...state,
        productItems: [newItem],
        lookPicture: newLookPicture.frontPicture,
        lookPictureSecond: newLookPictureSecond.frontPicture,
      };
    case IClothesAction.PRODUCT_ADDED_TO_BAG:
      return updateOrder(state, action.payload, 1);

    case IClothesAction.PRODUCT_ALL_REMOVED_FROM_BAG:
      const removedItem = state.bagItems.find(
        ({ id }): boolean => id === action.payload
      );
      return updateOrder(state, action.payload, -removedItem.count);

    case IClothesAction.PRODUCT_REMOVED_FROM_BAG:
      return updateOrder(state, action.payload, -1);

    case IClothesAction.SEARCH_CLOTHES:
      ///search fillter
      scrollToTop();
      const { value = "" } = action;

      const { clothesFromDb } = state;

      const search = (
        clothes: IClothesItem[],
        searchClothesValue: string
      ): IClothesItem[] => {
        if (searchClothesValue.length === 0) {
          return clothes;
        }
        return clothes.filter((cloth): boolean => {
          return (
            cloth.title
              .toLowerCase()
              .indexOf(searchClothesValue.toLowerCase()) > -1
          );
        });
      };
      const visibleClothes = filter(
        search(clothesFromDb, value),

        state.filterClothes
      );

      return {
        ...state,
        clothes: visibleClothes,
        searchClothesValue: value,
      };
    case IClothesAction.ON_FILTER_CLOTHES:
      scrollToTop();
      const { clothName = "" } = action;

      const filteredClothes = filter(state.clothesFromDb, clothName);
      return {
        ...state,
        clothes: filteredClothes,
        filterClothes: clothName,
      };
    case IClothesAction.ON_FILTER_SIZE:
      scrollToTop();
      const { sizeName = "" } = action;

      const filteredSized = filter(
        filterSizes(state.clothesFromDb, sizeName),
        state.filterClothes
      );
      return {
        ...state,
        clothes: filteredSized,
        filterSize: sizeName,
      };
    default:
      return state;

    case IClothesAction.ON_FILTER_PRICE:
      scrollToTop();
      const { priceName = "" } = action;

      const filteredPriced = filter(
        filterSizes(
          filterPrizes(state.clothesFromDb, priceName),
          state.filterSize
        ),
        state.filterClothes
      );
      return {
        ...state,
        clothes: filteredPriced,
        filterPrice: priceName,
      };
    case IClothesAction.ON_FILTER_FABRIC:
      scrollToTop();
      const { fabricName = "" } = action;

      const filteredFabric = filter(
        filterSizes(
          filterFabrics(state.clothesFromDb, fabricName),
          state.filterSize
        ),
        state.filterClothes
      );
      return {
        ...state,
        clothes: filteredFabric,
        filterFabric: fabricName,
      };
  }
};
export default reducer;
