import React from "react";
import Logo from "../Logo/Logo";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__menu">
        <div className="footer__wrapper">
          <Logo />
          <p className="footer__title">Яндекс.Сфера</p>
        </div>
        <div className="header__footer-container">
          <p className="footer__subtitle">2024</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
