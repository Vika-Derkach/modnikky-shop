import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { searchClothes } from "../../actions";
import { clothesAction } from "../../types/actionsTypes";
import "./search-input.css";
interface ProductPagePropsTypes {
  searchClothes: (e: string) => void,
  searchValue: string

}
const SearchInput: React.FC<ProductPagePropsTypes>  = ({ searchClothes, searchValue }) => {
  return (
    <Fragment>
      <span className="input-loop">
        <i className="fa fa-search" aria-hidden="true"></i>
      </span>
      <input
        type="text"
        className="search-input"
        placeholder="SEARCH"
        value={searchValue}
        onChange={(e) => searchClothes(e.target.value)}
      />
    </Fragment>
  );
};
interface mapStateToPropsTypes {
  searchClothesValue: string
}
const mapStateToProps = (props: mapStateToPropsTypes ) => {
  return {
    ///search fillter
    searchValue: props.searchClothesValue,
  };
};
function mapDispatchToProps(dispatch: Dispatch<clothesAction>) {
  return bindActionCreators({ searchClothes }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
