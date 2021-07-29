import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  productAddedToBag,
  productAllRemovedFromBag,
  productRemovedFromBag,
} from "../../actions";
import BagItem from "../bag-item";
import ContainedButton from "../contained-button";
import { withModnikkyService } from "../hoc";
import "./bag.css";
const Bag = ({
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
          <ContainedButton button_text={button_text_checkout} />
        </Link>
      </div>
    </section>
  );
};
const mapStateToProps = ({ bagItems, orderTotal, orderTotalPrice }) => {
  return {
    products: bagItems,
    totalItems: orderTotal,
    totalPrice: orderTotalPrice,
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
