import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./UpcomingEvent.css"
import EventImage from "../images/Image.svg"
// Подставить данные с бэка

export const UpcomingEvent = () => {
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
            <p className="navbar__tag tag-register">Зарегистрироваться</p>
          </div>
        </div>
        <div className="event__column2">
          <div className="event__about">
            {/* <h2 className="event__video-title">Видео</h2> */}
            {/* <div className="">
              <iframe className="event__video" width="560" height="315" src="https://www.youtube.com/embed/jNQXAC9IVRw" allow="autoplay; encrypted-media"></iframe>
            </div> */}
            {/* <h2 className="event__docs">Доклады
              <a className="event__doc-link" href="/">Ссылка на документ</a>
              <a className="event__doc-link" href="/">Ссылка на документ</a>
            </h2> */}
            <h2 className="event__description event__description-upcoming event__title">О мероприятии
              <p className="event__description-p">Приглашаем практикующих разработчиков С++ и энтузиастов языка на встречу Российской рабочей группы по стандартизации С++ (РГ21 С++). На мероприятии обсудим новости последних встреч Международного комитета по стандартизации C++, самые интересные новинки C++26, когда ждать рефлексию и std:get для пользовательских структур.
                Руководитель РГ21 С++ Антон Полухин ответит на вопросы о возможностях для российских разработчиков участвовать в развитии стандарта языка. А ещё мы вместе погенерим идеи для новых изменений!
                Встреча пройдёт в офисе Яндекса в Санкт-Петербурге. Так же будет онлайн трансляция. Всем зарегистрированным отправим ссылку на трансляцию.</p>
            </h2>
            <h2 className="event__speakers-title event__title">Спикеры</h2>
            <div className="event__speakers event__speakers-upcoming">
              <div className="event__speaker">
                <img className="speaker-photo" src="https://s3-alpha-sig.figma.com/img/0d0b/9674/20ab576175d39521e2f28078be78ce01?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CYbCCyrzaJASuZRZu~yJW7fTU3Yo2m1xO7BW71Z2wPhqff1mnVOvvSiXWOQtxXkAhwO4hYhWWEosKv5wIISEnMKT7Hm7whbsQE1wA-pQ48e7JyK6RcKGPt58M1QCwKFcKshbIjtglWMyDnZePDhkJ41pEzt9NhjeRIn1cbAC1mvodfhP4-X13Qs98bXE5IZZ-hZ-4XyOcSe6H5bp0pDadrh4nmbyCZhWgThWjWBQKPCjZrGmSzsdwtg2x2Jo8jyPaIsONJJmZh0l4A2WvzjjJV2gTpiUaFfZnB6-fNsFdnUfSsXpofZigTIRYr51hbAjWGEFe6z2xgwiB0fDeFX~nQ__"></img>
                <h2 className="event__speaker-name">Антон</h2>
                <p className="event__speaker-job">Яндекс Go</p>
                <p className="event__speaker-position">Руководитель группы разработки общих компонентов</p>
              </div>
              <div className="event__speaker">
                <img className="speaker-photo" src="https://s3-alpha-sig.figma.com/img/0d0b/9674/20ab576175d39521e2f28078be78ce01?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CYbCCyrzaJASuZRZu~yJW7fTU3Yo2m1xO7BW71Z2wPhqff1mnVOvvSiXWOQtxXkAhwO4hYhWWEosKv5wIISEnMKT7Hm7whbsQE1wA-pQ48e7JyK6RcKGPt58M1QCwKFcKshbIjtglWMyDnZePDhkJ41pEzt9NhjeRIn1cbAC1mvodfhP4-X13Qs98bXE5IZZ-hZ-4XyOcSe6H5bp0pDadrh4nmbyCZhWgThWjWBQKPCjZrGmSzsdwtg2x2Jo8jyPaIsONJJmZh0l4A2WvzjjJV2gTpiUaFfZnB6-fNsFdnUfSsXpofZigTIRYr51hbAjWGEFe6z2xgwiB0fDeFX~nQ__"></img>
                <h2 className="event__speaker-name">Константин</h2>
                <p className="event__speaker-job">Яндекс Go</p>
                <p className="event__speaker-position">Руководитель группы разработки общих компонентов</p>
              </div>
              <div className="event__speaker">
                <img className="speaker-photo" src="https://s3-alpha-sig.figma.com/img/0d0b/9674/20ab576175d39521e2f28078be78ce01?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CYbCCyrzaJASuZRZu~yJW7fTU3Yo2m1xO7BW71Z2wPhqff1mnVOvvSiXWOQtxXkAhwO4hYhWWEosKv5wIISEnMKT7Hm7whbsQE1wA-pQ48e7JyK6RcKGPt58M1QCwKFcKshbIjtglWMyDnZePDhkJ41pEzt9NhjeRIn1cbAC1mvodfhP4-X13Qs98bXE5IZZ-hZ-4XyOcSe6H5bp0pDadrh4nmbyCZhWgThWjWBQKPCjZrGmSzsdwtg2x2Jo8jyPaIsONJJmZh0l4A2WvzjjJV2gTpiUaFfZnB6-fNsFdnUfSsXpofZigTIRYr51hbAjWGEFe6z2xgwiB0fDeFX~nQ__"></img>
                <h2 className="event__speaker-name">Эрмедек</h2>
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
                <img className="speaker-photo-program" src="https://s3-alpha-sig.figma.com/img/0d0b/9674/20ab576175d39521e2f28078be78ce01?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CYbCCyrzaJASuZRZu~yJW7fTU3Yo2m1xO7BW71Z2wPhqff1mnVOvvSiXWOQtxXkAhwO4hYhWWEosKv5wIISEnMKT7Hm7whbsQE1wA-pQ48e7JyK6RcKGPt58M1QCwKFcKshbIjtglWMyDnZePDhkJ41pEzt9NhjeRIn1cbAC1mvodfhP4-X13Qs98bXE5IZZ-hZ-4XyOcSe6H5bp0pDadrh4nmbyCZhWgThWjWBQKPCjZrGmSzsdwtg2x2Jo8jyPaIsONJJmZh0l4A2WvzjjJV2gTpiUaFfZnB6-fNsFdnUfSsXpofZigTIRYr51hbAjWGEFe6z2xgwiB0fDeFX~nQ__"></img>
                <div className="event__program-author">Антон Полухин</div>
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
      <Footer />
    </>
  )
}
