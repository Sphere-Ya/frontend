import React from 'react';
import './Main.scss';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import Promo from "../Promo/Promo";
import Events from "../Events/Events";

function Main() {
    return (
        <>  
            <Header/>
            <main className='main'>
                <Promo />
                <Events />
            </main>
            <Footer />
        </>
    );
};

export default Main;