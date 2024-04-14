import React from "react";

import "./Promo.css"
import LogoBig from "../images/logo_Big_Spin.png"

function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <div className="promo__items">
                    <h1 className="promo__title">Яндекс. Сфера</h1>
                    <p className="promo__subtitle">Объединяем IT: знания, события, людей</p>
                </div>
                <img className="promo__logo" alt="Логотип" src={LogoBig}/>
            </div>
        </section>
    )
}

export default Promo;