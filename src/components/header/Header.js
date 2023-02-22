import React from 'react'
import './header.css'
import Logo from '../../assets/logo.png'


export default function Header() {
  return (
    <header className="header">
        <div className="container header__container">
            <div className="header__logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="header__title-container">
                <h1 className="header__title">
                <span className="header__title-text">Только самые</span>
                <span className="header__title-text header__title-text_red">сочные бургеры!</span> 
                </h1>
                <p className="header__appeal">Бесплатная доставка от 599₽</p>
            </div>
        </div>
    </header>
  )
}
