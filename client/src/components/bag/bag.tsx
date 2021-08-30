import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  productAddedToBag,
  productAllRemovedFromBag,
  productRemovedFromBag
} from "../../actions";
import { bagProductItemTypes } from '../../types/reducerTypes';
import BagItem from "../bag-item";
import ContainedButton from "../contained-button";
import { withModnikkyService } from "../hoc";
import "./bag.css";
interface BagsProps {
  products: bagProductItemTypes[],
  totalPrice: number,
  onDelete: (id: number) => void
  
  totalItems: number,
  onDecrease: (id: number) => void,
  onIncrease: (id: number) => void,

}
// let classSignIn;
// let text;
// const bagAction = () => {
//   classSignIn = " pay";
//   text = "You have paid";
//   return {
//     classSignIn,
//     text,
//   };
// }
const Bag: React.FC<BagsProps> = ({
  products,
  totalPrice,
  onDelete,
  totalItems,
  onDecrease,
  onIncrease,
}) => {
  const button_text_checkout = "PROCEED TO CHECKOUT";
  return (
    <section className="bag">
      <div className="bag-header">
        BAG <span>{totalItems} items</span>{" "}
      </div>
      {products.map((product, idx) => {
        return (
          <BagItem
            onDelete={() => onDelete(product.id)}
            onDecrease={() => onDecrease(product.id)}
            onIncrease={() => onIncrease(product.id)}
            product={product}
            key={product.id}
          />
        );
      })}
      <div className="payment">
        {" "}
        <div className="bag-total">Total USD ${totalPrice}</div>
        <Link to="/payment">
          <ContainedButton  button_text={button_text_checkout} onAction />
        </Link>
      </div>
    </section>
  );
};
interface BagsPropsTypes {
  bagItems: bagProductItemTypes[],
  orderTotal: number,
 
  
  orderTotalPrice: number,

  
}
const mapStateToProps = (props: BagsPropsTypes) => {
  return {
    products: props.bagItems,
    totalItems: props.orderTotal,
    totalPrice: props.orderTotalPrice,
  };
};
const mapDispatchToProps = {
  onDecrease: productRemovedFromBag,
  onDelete: productAllRemovedFromBag,
  onIncrease: productAddedToBag,
};
export default withModnikkyService()(
  connect(mapStateToProps, mapDispatchToProps)(Bag)
);
