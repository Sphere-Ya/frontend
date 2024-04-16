import React from "react";
import { Link } from "react-router-dom";

import './EventCardMini.css';
import Event from "../images/event-1.jpg";

function EventCardMini() {
  return (
    <div>
      <div className="events__card-container">
        <img
          src="https://s3-alpha-sig.figma.com/img/c9d7/bda4/50905b8f26d7760eff6846619e473479?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W32rhy~77lRTJw07jK~WObZrq~rrNorXm11xvX1kuO389FIM-MJSp4irNFC3YFwMDmKTLWHQn2px0iMuo0HTfzx6HNdTnfVGYJlxvwJdNXXUdp3S2TkG5ogmuIG8vySSAbUgbCAz8vrEY3kIBOxsfudAb9sINmWxXWrMm7-~oteujCWkLm0lXQBQenIMhyE0NEiAzjJ2NG4n8BbcvGk6np9Epoyldf1KVsTdv5TsH2gtyK4dY1KvnIw4vuaI9r5wG9QdQ~DZAD9DKmc70YYxB6UviwVXJgJXxCTaw~DdCOUKVzch1fWnIQdOFqtuiQosalx0SFpeevgYLiBxwprPOQ__"
          alt={`карточка события`}
          className="events__card-img"
        />
        <div className="events__card-info">
          <h2 className="events__card-title">Yet Another Level: Evoiution</h2>
          <p className="events__card-date">Пн, 25 марта</p>
          <p className="events__card-location">Москва+Онлайн</p>
          <p className="event__card-ticket">На рассмотрении</p>
          <p className="event__card-cal">Добавить в календарь</p>
        </div>
      </div>
    </div>
  );
};

export default EventCardMini
