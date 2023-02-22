import React from "react";
import "./MainCatalog.css";
import "./MainOrder.css";
import "./Count.css";
import "./Product.css";
import { ProductList } from "../../data/ProductList";


import MainOrderCatalog from './MainOrderCatalog';
import MainCatalog from './MainCatalog';


export default function Main() {
  return (
    <>
      <section className="catalog">
        <div className="container catalog__container">
          <MainOrderCatalog />
          <MainCatalog  />
        </div>
      </section>
    </>
  );
}
