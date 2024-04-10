import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
	return (
		<Link to={""}>
			<img
				className="logo"
				alt="Логотип сайта"
			/>
		</Link>
	);
}
