import React from "react";
import "./../Modal.css";
import './ModalDelivery.css'

function ModalDel() {
  return (
    <div className="modal modal__delvery "> {/* modal_open */}
      <div className="modal__main modal-delivery">
        <div className="modal-delivery__container">
          <h2 className="modal-delivery__title">Доставка</h2>
          <form className="modal-delivery__form" id="delivery">
            <fieldset className="modal-delivery__fieldset" disabled>
              <input
                className="modal-delivery__input"
                type="text"
                name="name"
                placeholder="Ваше имя"
              />
              <input
                className="modal-delivery__input"
                type="tel"
                name="phone"
                placeholder="Телефон"
              />
            </fieldset>
            <fieldset className="modal-delivery__fieldset modal-delivery__fieldset_radio" >
            <label className="modal-delivery__label">
                <input
                id="pickup"
                className="modal-delivery__radio"
                type="radio"
                name="format"
                value="pickup"
                checked
              />
              Самовызов
            </label>
            <label className="modal-delivery__label">
            <input
                className="modal-delivery__radio"
                type="radio"
                name="format"
                value="delivery"
              />Доставка
            </label>
            </fieldset>
            <fieldset className="modal-delivery__fieldset" disabled>
              <input
                className="modal-delivery__input"
                type="text"
                name="address"
                placeholder="Улица, дом, квартира"
              />
              <input
                className="modal-delivery__input modal-delivery__input_half"
                type="number"
                name="floor"
                placeholder="Этаж"
              />
                <input
                className="modal-delivery__input  modal-delivery__input_half"
                type="number"
                name="intercom"
                placeholder="Домофон"
              />
            </fieldset>
          </form>
          <button className="modal-delivery__submit" type="submit" form="delivery">Оформить</button>
        </div>
   
        <button type="button"
          className="modal__close" /*  onClick={() => closeModal(false)} */
        >
          <svg
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="7.0752"
              y="8.28249"
              width="1"
              height="20"
              transform="rotate(-45 7.0752 8.28249)"
            />
            <rect
              x="7.78223"
              y="22.4246"
              width="1"
              height="20"
              transform="rotate(-135 7.78223 22.4246)"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ModalDel;
