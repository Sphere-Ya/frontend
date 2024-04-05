import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg"

export default function Logo() {
	return (
		// todo link to main page
		<Link>
			<img
				className="logo"
				src={logo}
				alt="Логотип сайта"
			/>
		</Link>
	);
}
