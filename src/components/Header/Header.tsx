import React from "react";
import "./Header.scss"
import Logo from "../Logo/Logo";

function Header() {
	return (
		<>
			<header className="header">
				<div className="header__wrapper">
					<Logo />
					<p className="header__title">Яндекс.Сфера</p>
				</div>
					<button className="header__button"></button>
			</header>
		</>
	)
}

export default Header;
