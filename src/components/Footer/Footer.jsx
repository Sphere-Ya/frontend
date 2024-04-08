import React from "react";
import Logo from "../Logo/Logo";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footerLogo">
          <Logo />
          Яндекс.Сфера</div>
        <div>2024</div>
      </div>
    </footer>
  )
}

export default Footer;
