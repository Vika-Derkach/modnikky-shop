import {
  IApplicationState,
  IBagProductItem,
  IClothesItem,
} from "../types/reducerTypes";
const updateBagItems = (
  bagItems: IBagProductItem[],
  item: IBagProductItem,
  idx: number
): IBagProductItem[] => {
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
  bagProduct: IClothesItem,
  bagProductItem: IBagProductItem,
  quantity: number
): IBagProductItem => {
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
  state: IApplicationState,
  bagProductId: number,
  quantity: number
): IApplicationState => {
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
const filter = (items: IClothesItem[], filter: string): IClothesItem[] => {
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
const filterSizes = (items: IClothesItem[], filter: string): IClothesItem[] => {
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
  items: IClothesItem[],
  filter: string
): IClothesItem[] => {
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
  items: IClothesItem[],
  filter: string
): IClothesItem[] => {
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
export {
  updateBagItems,
  updateBagItem,
  updateOrder,
  filter,
  filterSizes,
  filterPrizes,
  filterFabrics,
  scrollToTop,
};
