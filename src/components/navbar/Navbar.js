import React from "react";
import './Navbar.css'

export default function Navbar() {
  return (
    <>
      <nav className="navigation">
        <div className="container navigation__container">
          <ul className="navigation__list">
            <li className="navigation__item">
              <button className="navigation__btn navigation__btn_burger navigation__btn_active">Бургеры</button>
            </li>
            <li className="navigation__item">
              <button className="navigation__btn navigation__btn_snack">Закуски</button>
            </li>
            <li className="navigation__item">
              <button className="navigation__btn navigation__btn_hotdog">Хот-доги</button>
            </li>
            <li className="navigation__item">
              <button className="navigation__btn navigation__btn_kombo">Комбо</button>
            </li>
            <li className="navigation__item">
              <button className="navigation__btn navigation__btn_shawarma">Шаурма</button>
            </li>
            <li className="navigation__item">
              <button className="navigation__btn navigation__btn_pizza">Пицца</button>
            </li>
            <li className="navigation__item">
              <button className="navigation__btn navigation__btn_wok">Вок</button>
            </li>
            <li className="navigation__item">
              <button className="navigation__btn navigation__btn_dessert">Десерты</button>
            </li>
            <li className="navigation__item">
              <button className="navigation__btn navigation__btn_saus">Соусы</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
