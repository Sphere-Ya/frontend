import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter } from 'react-router-dom'
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
import './App.css';

export default function App() {
	return (
		<div className="app">
			<Main />
		</div>
	);
}
