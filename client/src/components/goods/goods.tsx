import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { fetchClothes, onItemSelected, searchClothes } from "../../actions";
import ModnikkyService from "../../services/modnikky-service";
import { clothesAction } from "../../types/actionsTypes";
import ErrorIndicator from "../error-indicator";
import GoodsItem from "../goods-item";
import { withModnikkyService } from "../hoc";
import Spinner from "../spinner";
import "./goods.css";

interface BagsProps {
  clothes: any[];
  loading: boolean;
  error: null | string;
  selectedItem: any;
 
    onItemSelected :(id: number) => void
    fetchClothes: () => void

}
const Goods: React.FC<BagsProps> = ({ clothes, loading, error, onItemSelected, fetchClothes }) => {
  useEffect(() => {
    fetchClothes();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <ErrorIndicator />;
  }

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
interface mapStateToPropsTypes {
  clothes: string[];
  loading: boolean;
  error: null | string;
}
const mapStateToProps = (props: mapStateToPropsTypes) => {
  return { clothes: props.clothes ,
     loading: props.loading,
      error: props.error };
};
interface ownPropsTypes {
  modnikkyService: ModnikkyService
}
const mapDispatchToProps = (dispatch : Dispatch<clothesAction>, ownProps: ownPropsTypes) => {
  const { modnikkyService } = ownProps;
  return {
    fetchClothes: fetchClothes(modnikkyService, dispatch),
    // @ts-ignore: Unreachable code error
    onItemSelected: (id: number) => dispatch(onItemSelected(id)),
    ///search fillter
    searchClothes: searchClothes,
  };
};
export default withModnikkyService()(
  connect(mapStateToProps, mapDispatchToProps)(Goods)
);
