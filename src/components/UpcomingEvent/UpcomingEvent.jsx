import React, { useState } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./UpcomingEvent.scss"
import EventImage from "../images/Image.svg"
import Modal from "../RegisterPopup/RegisterPopup"

export const UpcomingEvent = () => {
  const [modalActive, setModalActive] = useState(true)
  return (
    <>
      <Header />
      <div className="route">Главная / Встреча РГ21 С++ в Санкт-Петербурге</div>
      <div className="event__card">
        <div className="event__column">
          <div className="event__type">Оффлайн + Онлайн</div>
          <div className="event__tags">
            <p className="event__tag">Разработка</p>
            <p className="event__tag">Маркетинг</p>
            <p className="event__tag">Анализ данных</p>
          </div>
          <h1 className="event__name">Встреча РГ21 С++ в Санкт-Петербурге
            <p className="event__date">1 апреля,  в 18:00 по местному времени</p>
            <p className="event__location">Санкт-Петербург, Пискарёвский проспект, 2к2</p>
          </h1>
        </div>
        <div className="event__image">
          <img src={EventImage} alt="event image" />
        </div>
      </div>
      <div className="event__columns">
        <div className="event__column1">
          <div className="navbar">
            <p className="navbar__tag">О мероприятии</p>
            <p className="navbar__tag">Программа</p>
            <p className="navbar__tag">Спикеры</p>
            <p className="navbar__tag">Как добраться</p>
            <button className="navbar__tag tag-register" onClick={() => setModalActive(true)}>Зарегистрироваться</button>
          </div>
        </div>
        <div className="event__column2">
          <div className="event__about">
            <h2 className="event__description event__description-upcoming event__title">О мероприятии
              <p className="event__description-p">Приглашаем практикующих разработчиков С++ и энтузиастов языка на встречу Российской рабочей группы по стандартизации С++ (РГ21 С++). На мероприятии обсудим новости последних встреч Международного комитета по стандартизации C++, самые интересные новинки C++26, когда ждать рефлексию и std:get для пользовательских структур.
                Руководитель РГ21 С++ Антон Полухин ответит на вопросы о возможностях для российских разработчиков участвовать в развитии стандарта языка. А ещё мы вместе погенерим идеи для новых изменений!
                Встреча пройдёт в офисе Яндекса в Санкт-Петербурге. Так же будет онлайн трансляция. Всем зарегистрированным отправим ссылку на трансляцию.</p>
            </h2>
            <h2 className="event__speakers-title event__title">Спикеры</h2>
            <div className="event__speakers event__speakers-upcoming">
              <div className="event__speaker">
                <img className="speaker-photo" src="https://s3-alpha-sig.figma.com/img/0d0b/9674/20ab576175d39521e2f28078be78ce01?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CYbCCyrzaJASuZRZu~yJW7fTU3Yo2m1xO7BW71Z2wPhqff1mnVOvvSiXWOQtxXkAhwO4hYhWWEosKv5wIISEnMKT7Hm7whbsQE1wA-pQ48e7JyK6RcKGPt58M1QCwKFcKshbIjtglWMyDnZePDhkJ41pEzt9NhjeRIn1cbAC1mvodfhP4-X13Qs98bXE5IZZ-hZ-4XyOcSe6H5bp0pDadrh4nmbyCZhWgThWjWBQKPCjZrGmSzsdwtg2x2Jo8jyPaIsONJJmZh0l4A2WvzjjJV2gTpiUaFfZnB6-fNsFdnUfSsXpofZigTIRYr51hbAjWGEFe6z2xgwiB0fDeFX~nQ__"></img>
                <h2 className="event__speaker-name">Антон Полухин</h2>
                <p className="event__speaker-job">Яндекс Go</p>
                <p className="event__speaker-position">Руководитель группы разработки общих компонентов</p>
              </div>
              <div className="event__speaker">
                <img className="speaker-photo" src="https://s3-alpha-sig.figma.com/img/d648/ee3b/3751fbb302872ba292cb76fbab5b5a9b?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b6v9fg6vTCo8E7brTig4ISwuwHlVFmqfm20M-Myu44LtEzbBgNxLEFlREnPNJCLXsXO~abA1pCZHyduxp4~dSXTe6PbR~rAsglihstYGei8JbC1U0jBjcQ9SvYZYSYDr16DCGq7HJHPrWsn3fnR1JY8-qZKRT75A8GiE3UA01DlAS2FMmHVtfeZygoCavyUQ618brBuS81xlk3PMK9EW~xO-7HuyfjcfquNznQmEZW~NF3ZSV2pp9Mac7Y4YGHguQrSLHlVxlUjvCnhINuS9evl4Yg0VRbhGG2oMNeFSh8v98WUy7lfFuib2-NUPlNzyzrfm96y3Ewwt9fvQDmPsUw__"></img>
                <h2 className="event__speaker-name">Константин Константипольскийн</h2>
                <p className="event__speaker-job">Яндекс Go</p>
                <p className="event__speaker-position">Руководитель группы разработки общих компонентов</p>
              </div>
              <div className="event__speaker">
                <img className="speaker-photo" src="https://s3-alpha-sig.figma.com/img/9a06/2efa/5cf8960794dc5325cf75adda5ad04d65?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S-4NGY4Q7iGzEoa1deNYZiK4riA5hAH2bsk7u36~pbn5egtMKq87XYO5vaQM8N5NYwhJCqw1sjwhF80uyoaLmP9ST9ZhJ5kWEkO4ps5VqGO~B6UkOfSd~2LEOJ4dPhjfoD8Iyw7mBC0MPT1zRYM3opSw3fxOQ-XA0RDmMX1WPcislAKltT9s3mH70v95ACg2aadaEsSqX8MczBLi5eYagtWBtJyhMl~k7hujAQeEk3nEvjO2GCgQ7lrNHNSUou-rOUlgJ~qgciK8D~9vuHheFRLs7-Bp4s53NfWuiRr~pTbbIyXsnOvtTsd2cwRzybLZtCoBiJ4pN-uKdZELw0s-dA__"></img>
                <h2 className="event__speaker-name">Эрмедек Мермедекштанский-Рубчинский</h2>
                <p className="event__speaker-job">Яндекс Go</p>
                <p className="event__speaker-position">Руководитель группы разработки общих компонентов</p>
              </div>
            </div>
            <h2 className="event__program event__title">Программа</h2>
            <div className="event__program-list">
              <div className="event__progam-columns">
                <div className="event__progam-timing">18:00-19:00</div>
                <div className="event__progam-description">Регистрация в оффлайн</div>
                <p className="event__program-p"></p>
              </div>
              <div className="event__progam-columns">
                <div className="event__progam-timing">19:00-20:00</div>
                <div className="event__progam-description">Новости со встречи международного Комитета по стандартизации
                  языка С++</div>
                <p className="event__program-p">Расскажем, как устроен сервис, связывающий мир виртуальных сетей с классическими
                  маршрутизаторами и сетевыми устройствами, и как он позволяет создавать гибридную облачную инфраструктуру.</p>
                <img className="speaker-photo-program" src="https://s3-alpha-sig.figma.com/img/0d0b/9674/20ab576175d39521e2f28078be78ce01?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CYbCCyrzaJASuZRZu~yJW7fTU3Yo2m1xO7BW71Z2wPhqff1mnVOvvSiXWOQtxXkAhwO4hYhWWEosKv5wIISEnMKT7Hm7whbsQE1wA-pQ48e7JyK6RcKGPt58M1QCwKFcKshbIjtglWMyDnZePDhkJ41pEzt9NhjeRIn1cbAC1mvodfhP4-X13Qs98bXE5IZZ-hZ-4XyOcSe6H5bp0pDadrh4nmbyCZhWgThWjWBQKPCjZrGmSzsdwtg2x2Jo8jyPaIsONJJmZh0l4A2WvzjjJV2gTpiUaFfZnB6-fNsFdnUfSsXpofZigTIRYr51hbAjWGEFe6z2xgwiB0fDeFX~nQ__"></img>
                <div className="event__program-author">Антон Полухин</div>
              </div>
              <div className="event__progam-columns">
                <div className="event__progam-timing">20:00-21:00</div>
                <div className="event__progam-description">Обсуждение идеи для новых изменений в стандарте</div>
                <p className="event__program-p">Расскажем про устройство и компоненты, которые используются для построения
                  высоконагруженного и стабильного облачного DNS, а также о планах развития сервиса.</p>
                <img className="speaker-photo-program" src="https://s3-alpha-sig.figma.com/img/d648/ee3b/3751fbb302872ba292cb76fbab5b5a9b?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b6v9fg6vTCo8E7brTig4ISwuwHlVFmqfm20M-Myu44LtEzbBgNxLEFlREnPNJCLXsXO~abA1pCZHyduxp4~dSXTe6PbR~rAsglihstYGei8JbC1U0jBjcQ9SvYZYSYDr16DCGq7HJHPrWsn3fnR1JY8-qZKRT75A8GiE3UA01DlAS2FMmHVtfeZygoCavyUQ618brBuS81xlk3PMK9EW~xO-7HuyfjcfquNznQmEZW~NF3ZSV2pp9Mac7Y4YGHguQrSLHlVxlUjvCnhINuS9evl4Yg0VRbhGG2oMNeFSh8v98WUy7lfFuib2-NUPlNzyzrfm96y3Ewwt9fvQDmPsUw__"></img>
                <div className="event__program-author">Константин Константипольский</div>
              </div>
              <div className="event__progam-columns">
                <div className="event__progam-timing">21:00-22:00</div>
                <div className="event__progam-description">Хранилище данных для критически важной инфраструктуры</div>
                <p className="event__program-p">Про путь команды при разработке программного комплекса для критический инфраструктуры, с упором на вопросы хранения данных.</p>
                <img className="speaker-photo-program" src="https://s3-alpha-sig.figma.com/img/9a06/2efa/5cf8960794dc5325cf75adda5ad04d65?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S-4NGY4Q7iGzEoa1deNYZiK4riA5hAH2bsk7u36~pbn5egtMKq87XYO5vaQM8N5NYwhJCqw1sjwhF80uyoaLmP9ST9ZhJ5kWEkO4ps5VqGO~B6UkOfSd~2LEOJ4dPhjfoD8Iyw7mBC0MPT1zRYM3opSw3fxOQ-XA0RDmMX1WPcislAKltT9s3mH70v95ACg2aadaEsSqX8MczBLi5eYagtWBtJyhMl~k7hujAQeEk3nEvjO2GCgQ7lrNHNSUou-rOUlgJ~qgciK8D~9vuHheFRLs7-Bp4s53NfWuiRr~pTbbIyXsnOvtTsd2cwRzybLZtCoBiJ4pN-uKdZELw0s-dA__"></img>
                <div className="event__program-author">Эрмедек Мермедекштанский-Рубчинский</div>
              </div>
            </div>
            <h2 className="event__location-address event__title">Как добраться</h2>
            <p className="event__location">Санкт‑Петербург, Пискарёвский проспект, 2к2
            </p>
            <div className="event__location-map ">
              <a className="event__location-map2" href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps">Санкт‑Петербург</a>
              <a className="event__location-map3" href="https://yandex.ru/maps/2/saint-petersburg/house/piskaryovskiy_prospekt_2k2/Z0kYcgdlQEMOQFtjfXV0eXVnbQ==/?ll=30.405969%2C59.958949&utm_medium=mapframe&utm_source=maps&z=17">Пискарёвский проспект, 2к2 на карте Санкт‑Петербурга — Яндекс Карты</a>
              <iframe className="event__location-map4" src="https://yandex.ru/map-widget/v1/?ll=30.405969%2C59.958949&mode=whatshere&whatshere%5Bpoint%5D=30.405969%2C59.958949&whatshere%5Bzoom%5D=17&z=17"></iframe>
            </div>
          </div>
        </div>
      </div>
      <Modal active={modalActive} setActive={setModalActive} />
      <Footer />
    </>
  )
}
