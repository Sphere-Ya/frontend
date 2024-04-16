import React from "react";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { ReactComponent as LogoutImg } from "../images/exit.svg"
import { ReactComponent as Line } from "../images/Line.svg"
import { ReactComponent as LineSelect } from "../images/Line-2.svg"
import EventCardMini from "../EventCardMini/EventCardMini";
import "./UserPage.css"

export const UserPage = () => {
  return (
    <>
      <Header />
      <div className="userpage">
        <div className="user__column">
          <img className="user__photo" src="https://s3-alpha-sig.figma.com/img/6cf5/9af4/6b32808422033e67a0439ced8b9f637e?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T89QS6j0yNgD2f1WUc3wPbXVFOlPxGZCK3G729hMr98BMFA7gHIB24Lg-7-1pptanFbqNxu~COjJLniVA6UjiVZ1VaD2lDXb-4KL2ABGNb~pJHcQpVcnz5pgtrXtvhdDGj9f2Q9ktYDTNroxDpYGHiVWugBa7KRz8dpRxnHCI25k96nsmwuBzfxOcPjsnbsJm2ec30OdZwbHE29ltgFPRZS22-K7HWIqf8aDn5uGBLfjsyr9ta~XRvS4l9OB~Bv3sMmprLy6yKq~nFpMH~pE~ubl8PwojQhdYhTY1SFjNnOaz8TuNiCZdT9S-xR6xnuYxLI-3941zoZuRp06hdcHkQ__"></img>
          <Line className="line" />
          <LineSelect className="line__select" />
          <div className="user__name">Константин <br />Христорождественский </div>
          <div className="user__data">Личные данные</div>
          <div className="user__events">Мои события</div>
          <div className="user__tickets">Билеты</div>
          <div className="user__logout">Выйти
            <LogoutImg className="logout__img" />
          </div>
        </div>
        <div className="user__content-column">
          <div className="user__route">Главная / Мои события /</div>
          <div className="user__upcoming user__event-type">Предстоящие</div>
          <div className="user__events-upcoming">
            <EventCardMini className="event__card" />
            <EventCardMini className="event__card" />
            <EventCardMini className="event__card" />
            <EventCardMini className="event__card" />
            <EventCardMini className="event__card" />
          </div>
          <div className="user__event-type"> Прошедшие
            <div className="user__events-past">
              <EventCardMini className="event__card" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
