import React from "react";
import Categories from "../categories";
import Goods from "../goods";
import "./catalog-page.css";
const CatalogPage: React.FC = () => {
  return (
    <section className="catalog-page">
      <div className="catalog-page-container">
        <div className="catalog-page-categories">
          <Categories />
        </div>
        <div className="catalog-page-goods">
          <Goods />
        </div>
      </div>
    </section>
  );
};
export default CatalogPage;
