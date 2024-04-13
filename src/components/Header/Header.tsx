import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import Logo from "../Logo/Logo";

function Header() {
	return (
		<>
			<header className="header">
				<div className="header__menu">
					<div className="header__wrapper">
						<Logo />
						<p className="header__title">Яндекс.Сфера</p>
					</div>
					<div className="header__login-container">
						<Link to="/" className="header__login">
							{" "}
							Войти
						</Link>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header;
