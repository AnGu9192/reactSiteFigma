import photo from "./../../assets/photo.jpg";

import React,{useState} from 'react'

function MainOrderCatalog() {
  const [show,setShow] = useState(true)
  return (
    <div className="catalog__order order order_open">
     <div className="order__wrapper" >
      <div className="order__wrap-title" tabIndex="0" role="button">
           <h2 className="order__title"  onClick={() => setShow(!show)}>Корзина</h2>
           <span className="order__count">4</span>
         </div>
         {
      show &&  <div className="order__wrap_list">
           <ul className="order__list">
             <li class="order__item">
               <img
                 src={photo}
                 alt="Супер сырный"
                 className="order__image"
               />
   
               <div className="order__product">
                 <h3 className="order__product-title">Супер сырный</h3>
                 <p className="order__product-weight">512г</p>
                 <p className="order__product-price">
                   550
                   <span className="currency">₽</span>
                 </p>
               </div>
               <div className="order__product-count count">
                 <button className="count__minus">-</button>
                 <p className="count__amount">1</p>
                 <button className="count__plus">+</button>
               </div>
             </li>
             <li class="order__item">
               <img
                 src={photo}
                 alt="Супер сырный"
                 className="order__image"
               />
   
               <div className="order__product">
                 <h3 className="order__product-title">Супер сырный</h3>
                 <p className="order__product-weight">512г</p>
                 <p className="order__product-price">
                   550
                   <span className="currency">₽</span>
                 </p>
               </div>
               <div className="order__product-count count">
                 <button className="count__minus">-</button>
                 <p className="count__amount">1</p>
                 <button className="count__plus">+</button>
               </div>
             </li>
             <li class="order__item">
               <img
                 src={photo}
                 alt="Супер сырный"
                 className="order__image"
               />
   
               <div className="order__product">
                 <h3 className="order__product-title">Супер сырный</h3>
                 <p className="order__product-weight">512г</p>
                 <p className="order__product-price">
                   550
                   <span className="currency">₽</span>
                 </p>
               </div>
               <div className="order__product-count count">
                 <button className="count__minus">-</button>
                 <p className="count__amount">1</p>
                 <button className="count__plus">+</button>
               </div>
             </li>
           </ul>
           <div className="order__total">
             <p>Итого</p>
             <p>
               <span className="order__total-amount">1279</span>
               <span className="currency">₽</span>
             </p>
           </div>
           <button className="order__submit">Оформить заказ</button>
           <div className="order__wrap-apeal">
             <p className="order__apeal order__apeal-icon">
               Бесплатная доставка
             </p>
             <button class="order__close">Свернуть</button>
           </div>
         </div>
   
  }
   
       </div>
 
    
 
  </div>

  )
}

export default MainOrderCatalog