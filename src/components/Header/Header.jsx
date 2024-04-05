import React from "react";

import Logo from "../Logo/Logo"
// import Navigation
// import LoginMenu

function Header() {
	return (
		<>
			<header className="header">
				<div className="header__wrapper">
					<div className="headerLogo">
						<Logo />
						Яндекс.Сфера</div>
					<div className="userLogin"></div>
				</div>
			</header>
		</>
	)
}

export default Header;
