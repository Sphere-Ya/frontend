import React from "react";
import "./RegisterPopup.scss"
import { ReactComponent as Triangle } from "../images/triangle.svg"

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
        <Triangle className="modal__triangle" />
        <form className="modal__form">
          <div className="modal__form-title">Давай знакомиться</div>
          <div className="input__type input__name-title"><span className="input__colortext">* </span>Имя</div>
          <input className="form__input input__name" placeholder="Константин"></input>
          <div className="input__type input__lastname-title"><span className="input__colortext">* </span>Фамилия</div>
          <input className="form__input input__lastname" placeholder="Христорождественский"></input>
          <div className="input__type input__email-title"><span className="input__colortext">* </span>E-mail</div>
          <input className="form__input input__email" placeholder="Ваша почта"></input>
          <div className="input__type input__phone-title"><span className="input__colortext">* </span>Телефон</div>
          <input className="form__input input__phone" placeholder="+7 (927)"></input>
          <div className="input__type input__job-title"><span className="input__colortext">* </span>Должность</div>
          <input className="form__input input__job"></input>
          <div className="input__type input__exp-title"><span className="input__colortext">* </span>Ваш опыт Работы</div>
          <select className="form__input input__exp">
            <option value="0-1">0-1 года</option>
            <option value="1-3">1-3 года</option>
            <option value="3-5">3-5 лет</option>
            <option value="5+">5+ лет</option>
          </select>
          <div className="input__type input__front-title"><span className="input__colortext">* </span>Ваше направление</div>
          <select className="form__input input__front">
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Fullstack">Fullstack</option>
            <option value="Информационная безопасность">Информационная безопасность</option>
            <option value="Тестирование">Тестирование</option>
            <option value="Мобильная разработка">Мобильная разработка</option>
            <option value="DevOps">DevOps</option>
            <option value="QA">QA</option>
          </select>
          <div className="input__type input__stack-title">Стек технологий</div>
          <select className="form__input input__stack">
            <option value="HTML CSS JS">HTML CSS JS</option>
            <option value="Python">Python</option>
            <option value="Go">Go</option>
            <option value="C#">C#</option>
            <option value="C C++">C C++</option>
            <option value="Kotlin">Kotlin</option>
            <option value="Java">Java</option>
            <option value="Swift">Swift</option>
          </select>
          <div className="input__type input__radio-title"><span className="input__colortext-radio">*</span>Формат участия в мероприятии
            <div className="input__type input__radio-title1" >Оффлайн</div>
            <input name="a" className="form__input-radio" type="radio"></input>
            <div className="input__type input__radio-title2">Онлайн</div>
            <input name="a" className="form__input-radio" type="radio"></input>
          </div>
          <div className="input__type input__checkbox-title1">Я даю своё согласие на передачу в ООО «ЯНДЕКС» анкеты, содержащей мои персональные данные, и согласен с тем, что они будут храниться в ООО «ЯНДЕКС» в течении 10 лет и будут использованы исключительно для целей приглашения меня к участию в мероприятиях группы компаний «ЯНДКС», в соответствии с Федеральным законом «О персональных данных».
            <p><span className="input__colortext">*  </span>Соглашение обязательно</p></div>
          <input className="form__input input__checkbox1" type="checkbox"></input>
          <div className="input__type input__checkbox-title2">Я даю своё согласие на передачу в ООО «ЯНДКС» резюме и/или анкеты, содержащих мои персональные данные, и согласен с тем, что они будут храниться в ООО «ЯНДЕКС» в течении 10 лет и будут обрабатываться исключительно для целей предложения мне вакансий группы компаний «ЯНДЕКС», в соответствии с Федеральным законом «О персональных данных».
            <p>Соглашение необязательно</p></div>
          <input className="form__input input__checkbox2" type="checkbox"></input>
          <button type="submit" className="form__button from__button-submit">Отправить</button>
          <button type="clear" className="form__button from__button-clear">Очистить</button>
        </form>
        <div className="input__type input__place-title"><span className="input__colortext">* </span>Место работы</div>
        <input className="form__input input__place" placeholder="Название работодателя или фриланс"></input>
      </div>
    </div>
  )
}
export default Modal;
