import { IClothesAction } from "../types/actionsTypes";
import reducer from "./index";
describe("The reducer", () => {
  it("Should return the same state on an inapplicable action", () => {
    const state = {
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
    const newState = reducer(state, { type: "UNDEFINED_ACTION" });

    /**
     * In this case both toBe and toEqual will return true. However, the real test in this example is toBe, since we want literally the same object both times.
     *
     */
    expect(newState).toBe(state);
    expect(newState).toEqual(state);
  });

  it("Should add a new questions to the list on a PRODUCT_ADDED_TO_BAG action", () => {
    const state = {
      clothesFromDb: [],
      clothes: [
        {
          id: 1,
          frontPicture:
            "https://assets.burberry.com/is/image/Burberryltd/EDC85896-F540-490D-B9A4-5ADF6A0EED21.jpg?$BBY_V2_ML_1x1$&wid=2500&hei=2500",
          title: "Coat",
          price: 43,
          color: "GREY",
          count: 1,
          size: "L",
        },
        {
          id: 2,
          frontPicture:
            "https://assets.burberry.com/is/image/Burberryltd/EDC85896-F540-490D-B9A4-5ADF6A0EED21.jpg?$BBY_V2_ML_1x1$&wid=2500&hei=2500",
          title: "Coat",
          price: 43,
          color: "GREY",
          count: 1,
          size: "L",
        },
      ],
      loading: true,
      error: null,
      selectedItem: null,
      productItems: [],
      bagItems: [
        {
          id: 1,
          frontPicture:
            "https://assets.burberry.com/is/image/Burberryltd/EDC85896-F540-490D-B9A4-5ADF6A0EED21.jpg?$BBY_V2_ML_1x1$&wid=2500&hei=2500",
          title: "Coat",
          price: 43,
          color: "GREY",
          count: 1,
          size: "L",
        },
      ],
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
    const newState = reducer(state, {
      type: IClothesAction.PRODUCT_ADDED_TO_BAG,
      payload: 2,
    });

    /** Here a map is used to allow a simple one-liner as an equality check.
     * TODO... is there a more applicable matcher available?
     */
    console.log(newState.bagItems, "items");
    expect(newState.bagItems.map((q) => q.id)).toEqual([1, 2]);
  });
});
