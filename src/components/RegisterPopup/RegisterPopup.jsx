import React from "react";
import "./RegisterPopup.css"

// eslint-disable-next-line react/prop-types
const Modal = ({ active, setActive }) => {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()} >
        <div className="modal__welcome">
          <p className="modal__welcome-p1">Добро пожаловать в Яндекс. Сферу.
          </p>
          <p className="modal__welcome-p2">У нас все мероприятия бесплатные, но участвовать можно только подтверждённым пользователям.
            Для этого необходимо заполнить форму ниже и дать согласие на обработку данных.
          </p>
        </div>
        <img className="modal__welcome-image" src="https://s3-alpha-sig.figma.com/img/6cf5/9af4/6b32808422033e67a0439ced8b9f637e?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LKSt-69dP7ocBYzTglJZiw3XMog7Z6wyx~-RgzqzY~c6IzrW2FM97GMn2J9m8ohkpcB~79XyFSOGfTbs7fAbtMFaBRYv2tAMKNdDqd9NiCNE3d6rhsV7wLm29X2NpGyptr61PVhOAHnMqVd5DqRsHVxWfsqNKc2vwBM1sGQgmPNLIF5DOnlqIT~gHygAuVJoDBobEdS6YnGsAc-uuaKucU-yIuyzM-KWJUScGf-gdblxJT~YK003w6EwNORIWytlYv6VXpEdTmuiWbPBR~FMSd3-UV4IxCvEeUYs6R3ELdh6~fgDtf4qbkbMmXsbb38HR4ijW~m2SW2toCEMlmrWWg__" ></img>
        <form className="modal__form">
          <div className="modal__form-title">Давай знакомиться</div>
          <input className="form__input">Имя</input>
          <input className="form__input">Фамилия</input>
          <input className="form__input">E-mail</input>
          <input className="form__input">Телефон</input>
          <input className="form__input">Место работы</input>
          <input className="form__input">Должность</input>
          <input className="form__input">Ваш опыт Работы</input>
          <input className="form__input">Ваше направление</input>
          <input className="form__input">Стек технологий</input>
          <input className="form__input-radio" type="radio"></input>
          <input className="form__input-radio" type="radio"></input>
          <input className="form__input" type="checkbox"></input>
          <input className="form__input" type="checkbox"></input>
        </form>
      </div>
    </div>
  )
}
export default Modal;
