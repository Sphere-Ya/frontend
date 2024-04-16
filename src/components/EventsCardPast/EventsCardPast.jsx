import React from "react";
import { Link } from "react-router-dom";

import './EventsCardPast.scss';
import Event from "../images/event-past.jpg";

function EventsCard() {
  return (
    <li className="events-card">
      <div className="events-card__container">
        <img
          src={Event}
          alt={`карточка события`}
          className="events-card__img"
        />
        <div className="events-card__info">
          <div className="events-card__info-speciality">
            <p className="events-card__speciality">Менеджмент</p>
          </div>
          <h2 className="events-card__title">HR Tech Python Meetup; Екатеринбург</h2>
          <p className="events-card__date">Пн, 25 марта</p>
          <p className="events-card__location">Екатеринбург</p>
          <Link
            className="events-card__link"
            to="/upcomingevent"
            target="_blank"
          >Смотреть материалы
          </Link>
        </div>
      </div>
    </li>
  );
};

export default EventsCard;