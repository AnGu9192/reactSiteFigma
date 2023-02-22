import React from "react";
import "./../Modal.css";
import './modal-product.css'
import burger from './../../assets/burger.jpg' 



function Modal({closeModal}) {


  return (
    <>
            <div className="modal modal__product modal_open">
        <div className="modal__main modal-product">
          <div className="modal-product__container">
            <h2 className="modal-product__title">Мясная бомба</h2>
            <div className="modal-product__content">
              <img src={burger} alt="bomba" className="modal-product__Image" />
              <div>
              <p className="modal-product__description">
                Мясная бомба Супер мясное наслаждение! Большая рубленая котлета
                из свежего говяжего мяса покорит вас своей сочностью, а
                хрустящие листья салата добавят свежести.
              </p>
              <div className="modal-product__ingredients ingredients">
                <h3 className="ingredients__title">Состав: </h3>
                <ul className="ingredients__list">
                    <li className="ingredients__item">Пшеничная булочка </li>
                    <li className="ingredients__item">Котлета из говядины</li>
                    <li className="ingredients__item"> Красный лук</li>
                    <li className="ingredients__item"> Листья салата </li>
                    <li className="ingredients__item"> Соус горчичный</li>
                </ul>  
                <p className="ingredients__calories">520г, ккал 430</p>
              </div>
       
              </div>
              
        
            </div>
         
            <div className="modal-product__footer">
                <div className="modal-product__add">
                  <button className="modal-product__btn">
                  Добавить
                  </button>  
                  <div className="modal-product__count count">
                 <button className="count__minus">-</button>
                 <p className="count__amount">1</p>
                 <button className="count__plus">+</button>
               </div>

                </div>
                <p className="modal__product-price">
                   550
                   <span className="currency">₽</span>
                 </p>
              </div>

          </div>
                
        

         <button className="modal__close" onClick={() => closeModal(false)}>
         

        <svg width="29" height="30" viewBox="0 0 29 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="7.0752" y="8.28249" width="1" height="20" transform="rotate(-45 7.0752 8.28249)"/>
        <rect x="7.78223" y="22.4246" width="1" height="20" transform="rotate(-135 7.78223 22.4246)"/>
        </svg>

        </button>
        </div>
      </div>

    </>
  );
}

export default Modal;
