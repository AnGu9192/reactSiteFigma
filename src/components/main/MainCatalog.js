import React, { useState } from "react";
import { ProductList } from "../../data/ProductList";
import burger from './../../assets/burger.jpg' 
import Modal from './../../modal/ModalAdd/Modal';


function MainCatalog({id, image, name, price }) {
  const [product, setProduct] = useState(ProductList);
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div className="catalog__wrapper">
      <h2 className="catalog__title">Бургеры</h2>

      <div className="catalog_wrap_list">
        {product.map((product) => {
          return (
            <ul className="catalog__list">
              <li className="catalog__item">
                <article className="product">
                  <img src={product.image} alt="" className="product__image" />
                  <p className="product__price">
                    {product.price}
                    <span className="currency">₽</span>
                  </p>
                  <h3 className="product__title">
                    <button className="product__detail">{product.name}</button>
                  </h3>
                  <p className="product__weight">520г</p>
                  <button className="product__add" type="button"
                   onClick={() => setModalIsOpen(true)} >
                    Добавить
                  </button>
             
                </article>
              </li>
            </ul>
          );
        })}
         {modalIsOpen &&<Modal  closeModal={setModalIsOpen}/>}

      </div>
    </div>
  );
}

export default MainCatalog;
