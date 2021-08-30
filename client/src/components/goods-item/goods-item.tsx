import React from "react";
import { Link } from "react-router-dom";
import { IClothesItem } from "../../types/reducerTypes";
import "./goods-item.css";
interface GoodsItemPropsTypes {
  cloth: IClothesItem,
  onItemSelected: () => void,

}
const GoodsItem: React.FC<GoodsItemPropsTypes>  = ({ cloth, onItemSelected }) => {
  const { frontPicture } = cloth;

  return (
    <Link
      to={`/product/${cloth.id}`}
      className="good-item"
      onClick={onItemSelected}
    >
      <img src={frontPicture} alt="" />
    </Link>
  );
};
export default GoodsItem;
