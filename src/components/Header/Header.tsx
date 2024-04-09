import React from "react";
import "./Header.scss"

// import Navigation
// import LoginMenu

function Header() {
	return (
		<>
			<header className="header">
				<div className="header__wrapper">
					<div className="headerLogo">
						<div /> Яндекс.Сфера</div>
					<div className="userLogin">Войти</div>
				</div>
			</header>
		</>
	)
}

export default Header;
