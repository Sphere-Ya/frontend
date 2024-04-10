import React from "react";
import Logo from "../Logo/Logo";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer__wrapper">
          <Logo />
          <p className="footer__title">Яндекс.Сфера</p>
        </div>
        <div>
          <p className="">2024</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
