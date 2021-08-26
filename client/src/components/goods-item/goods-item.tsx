import React from "react";
import { Link } from "react-router-dom";
import { clothasItemTypes } from "../../types/reducerTypes";
import "./goods-item.css";
interface GoodsItemPropsTypes {
  cloth: clothasItemTypes,
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
