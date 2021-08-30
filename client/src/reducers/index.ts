import { ClothesAction, IClothesAction } from "../types/actionsTypes";
import {
  applicationStateTypes,
  bagProductItemTypes,
  clothasItemTypes,
} from "../types/reducerTypes";
const initialState: applicationStateTypes = {
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
const updateBagItems = (
  bagItems: bagProductItemTypes[],
  item: bagProductItemTypes,
  idx: number
): bagProductItemTypes[] => {
  /// удаляє елемент з масива
  if (item.count === 0) {
    return [...bagItems.slice(0, idx), ...bagItems.slice(idx + 1)];
  }
  //новий елемент і його потібно добавити в масив
  if (idx === -1) {
    return [...bagItems, item];
  }
  //обновляє існуючий масив
  return [...bagItems.slice(0, idx), item, ...bagItems.slice(idx + 1)];
};

const updateBagItem = (
  bagProduct: clothasItemTypes,
  bagProductItem: bagProductItemTypes,
  quantity: number
): bagProductItemTypes => {
  if (bagProductItem) {
    return {
      ...bagProductItem,
      price: bagProductItem.price + quantity * bagProduct.price,
      count: bagProductItem.count + quantity,
    };
  } else {
    return {
      id: bagProduct.id,
      title: bagProduct.title,
      frontPicture: bagProduct.frontPicture,
      price: bagProduct.price,
      color: bagProduct.color,
      count: 1,
      size: bagProduct.size,
    };
  }
};

const updateOrder = (
  state: applicationStateTypes,
  bagProductId: number,
  quantity: number
): applicationStateTypes => {
  const { clothes, bagItems } = state;
  // const bagProductId = action.payload;
  const bagProduct = clothes.find(
    (product): boolean => product.id === bagProductId
  );
  const bagProductIndex = bagItems.findIndex(
    ({ id }): boolean => id === bagProductId
  );
  const bagProductItem = bagItems[bagProductIndex];

  const newBagItem = updateBagItem(bagProduct, bagProductItem, quantity);

  //////
  const updatedItems = updateBagItems(
    state.bagItems,
    newBagItem,
    bagProductIndex
  );

  let countBag = 0;
  let countPriceBag = 0;
  updatedItems.forEach((updatedItem): void => {
    countBag = updatedItem.count + countBag;
  });
  updatedItems.forEach((updatedItem): void => {
    countPriceBag = updatedItem.price + countPriceBag;
  });
  //
  return {
    ...state,
    bagItems: updateBagItems(bagItems, newBagItem, bagProductIndex),
    orderTotal: countBag,
    orderTotalPrice: countPriceBag,
  };
};

//filter
const filter = (
  items: clothasItemTypes[],
  filter: string
): clothasItemTypes[] => {
  switch (filter) {
    case "shop-all":
      return items;
    case "shorts":
      return items.filter((item): boolean => item.kind === "shorts");
    case "jeans":
      return items.filter((item): boolean => item.kind === "jeans");
    case "jacket":
      return items.filter((item): boolean => item.kind === "jacket");
    case "top":
      return items.filter((item): boolean => item.kind === "top");
    case "tee-and-trank":
      return items.filter((item): boolean => item.kind === "tee-and-trank");
    case "shirt":
      return items.filter((item): boolean => item.kind === "shirt");
    case "dress":
      return items.filter((item): boolean => item.kind === "dress");
    case "knitwear":
      return items.filter((item): boolean => item.kind === "knitwear");
    case "jumpsuit":
      return items.filter((item): boolean => item.kind === "jumpsuit");
    case "bottom":
      return items.filter((item): boolean => item.kind === "bottom");
    case "hoodie":
      return items.filter((item): boolean => item.kind === "hoodie");
    case "skirt":
      return items.filter((item): boolean => item.kind === "skirt");

    default:
      return items;
  }
};
const filterSizes = (
  items: clothasItemTypes[],
  filter: string
): clothasItemTypes[] => {
  switch (filter) {
    // case "shop-all":
    //   return items;
    case "S":
      return items.filter((item): boolean => item.size === "S");
    case "M":
      return items.filter((item): boolean => item.size === "M");
    case "L":
      return items.filter((item): boolean => item.size === "L");
    case "XL":
      return items.filter((item): boolean => item.size === "XL");

    default:
      return items;
  }
};

const filterPrizes = (
  items: clothasItemTypes[],
  filter: string
): clothasItemTypes[] => {
  switch (filter) {
    case "<30$":
      return items.filter((item): boolean => item.price <= 30);
    case "30-300$":
      return items.filter(
        (item): boolean => item.price > 30 && item.price < 300
      );
    case "300+$":
      return items.filter((item): boolean => item.price >= 300);

    default:
      return items;
  }
};
const filterFabrics = (
  items: clothasItemTypes[],
  filter: string
): clothasItemTypes[] => {
  switch (filter) {
    case "COTTON":
      return items.filter((item): boolean => item.fabric === "COTTON");
    case "DENIM":
      return items.filter((item): boolean => item.fabric === "DENIM");
    case "LACE":
      return items.filter((item): boolean => item.fabric === "LACE");
    case "LEATHER":
      return items.filter((item): boolean => item.fabric === "LEATHER");
    case "LINEN":
      return items.filter((item): boolean => item.fabric === "LINEN");
    case "SILK":
      return items.filter((item): boolean => item.fabric === "SILK");
    case "SYNTHETIC":
      return items.filter((item): boolean => item.fabric === "SYNTHETIC");
    case "WOOL":
      return items.filter((item): boolean => item.fabric === "WOOL");

    default:
      return items;
  }
};
//scroll to top
const scrollToTop = (): void => {
  window.scrollTo({
    top: 10,
    behavior: "smooth",
  });
};
const reducer = (
  state = initialState,
  action: ClothesAction
): applicationStateTypes => {
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
        clothes: clothasItemTypes[],
        searchClothesValue: string
      ): clothasItemTypes[] => {
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
