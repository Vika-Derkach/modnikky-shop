import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { onItemSelected, searchClothes } from "../../actions";
import ErrorIndicator from "../error-indicator";
import GoodsItem from "../goods-item";
import { withModnikkyService } from "../hoc";
import Spinner from "../spinner";
import "./goods.css";
const Goods = ({ onItemSelected, fetchClothes }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  useEffect(() => {
    dispatch({
      type: "FETCH_CLOTHES_REQUEST",
    });
  }, []);
  const { clothes, loading, error } = state;
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorIndicator />;
  }
  console.log("clothes", clothes);
  return (
    <div>
      <div className="goods-item-container">
        {clothes.map((cloth) => {
          return (
            <GoodsItem
              cloth={cloth}
              key={cloth.id}
              onItemSelected={() => onItemSelected(cloth.id)}
            />
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = ({ clothes, loading, error }) => {
  return { clothes, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { modnikkyService } = ownProps;
  return {
    // fetchClothes: fetchClothes(modnikkyService, dispatch),
    onItemSelected: (id) => dispatch(onItemSelected(id)),
    ///search fillter
    searchClothes: searchClothes,
  };
};
export default withModnikkyService()(
  connect(mapStateToProps, mapDispatchToProps)(Goods)
);
