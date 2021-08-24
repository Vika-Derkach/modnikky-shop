import React from "react";
import { connect } from "react-redux";
import {
  onFilterClothes,
  onFilterFabric,
  onFilterPrice,
  onFilterSize
} from "../../actions";
import CategoriesClothesFilter from "../categories-clothes-filter";
import SearchInput from "../search-input";
import TreeViewCategories from "../tree-view-categories";
import "./categories.css";
interface CategoriesPropsTypes {

  filterClothes: string,
  filterSize: string,
  onFilterClothes: (name: string) => void,
  onFilterSize: (name: string)=> void,
 
  onFilterPrice: (name: string) => void,
  onFilterFabric: (name: string) => void,
}
const Categories: React.FC<CategoriesPropsTypes> = ({
  filterClothes,
  onFilterClothes,
  onFilterSize,
  filterSize,
  onFilterPrice,
  onFilterFabric,
}) => {
  return (
    <div className="categories">
      <h2>Categories</h2>
      <div className="categories-media_input">
        <SearchInput />
      </div>
      <div className="categories-container">
        <CategoriesClothesFilter
          filterClothes={filterClothes}
          onFilterClothes={onFilterClothes}
        />

        {/* <button className="button-categories">SALE</button> */}

        <div className="filters-categories">FILTERS</div>
        <TreeViewCategories
          onFilterSize={onFilterSize}
          filterSize={filterSize}
          onFilterPrice={onFilterPrice}
          onFilterFabric={onFilterFabric}
        />
      </div>
    </div>
  );
};
interface mapStateToPropsTypes {
  filterClothes: string,
   filterSize: string
}
const mapStateToProps = (props: mapStateToPropsTypes) => {
  return {
    filterClothes: props.filterClothes,
    filterSize: props.filterSize,
  };
};

const mapDispatchToProps = {
  onFilterClothes: (name: string) => onFilterClothes(name),
  onFilterSize: (name: string) => onFilterSize(name),
  onFilterPrice: (name: string) => onFilterPrice(name),
  onFilterFabric: (name: string) => onFilterFabric(name),
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
