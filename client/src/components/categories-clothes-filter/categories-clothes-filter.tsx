import React from "react";
import "./categories-clothes-filter.css";
interface CategoriesClothesFilterPropsTypes {
  filterClothes: string,
  onFilterClothes: (name: string) => void,

}
const CategoriesClothesFilter: React.FC<CategoriesClothesFilterPropsTypes> = ({ onFilterClothes, filterClothes }) => {
  const buttonsFilter = [
    { name: "shop-all", label: "SHOP ALL" },
    { name: "shorts", label: "SHORTS" },
    { name: "jeans", label: "JEANS" },
    { name: "jacket", label: "JACKETS" },
    { name: "top", label: "TOPS" },
    { name: "tee-and-trank", label: "TEES AND TANKS" },
    { name: "shirt", label: "SHIRT" },
    { name: "dress", label: "DRESSES" },
    { name: "knitwear", label: "KNITWEAR" },
    { name: "jumpsuit", label: "JUMPSUITS" },
    { name: "bottom", label: "BOTTOMS" },
    { name: "hoodie", label: "HOODIES" },
    { name: "skirt", label: "SKIRTS" },
  ];

  const buttons = buttonsFilter.map(({ name, label }) => {
    const isActive = filterClothes === name;

    const clazz = isActive ? "button-active" : "button-nonactive";
    return (
      <button
        type="button"
        className={`button-categories ${clazz}`}
        key={name}
        onClick={() => onFilterClothes(name)}
      >
        {label}
      </button>
    );
  });
  return <section className="categories-container">{buttons}</section>;
};
export default CategoriesClothesFilter;
