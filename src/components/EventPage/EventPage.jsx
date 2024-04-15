import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./EventPage.scss"
import EventImage from "../images/Image.svg"
// Подставить данные с бэка

export const EventPage = () => {
	return (
		<>
			<Header />
			<div className="route">Главная / Двенадцатая Вебмастерская</div>
			<div className="event__card">
				<div className="event__column">
					<div className="event__type">Оффлайн + Онлайн</div>
					<div className="event__tags">
						<p className="event__tag">Разработка</p>
						<p className="event__tag">Маркетинг</p>
						<p className="event__tag">Анализ данных</p>
					</div>
					<h1 className="event__name">Двенадцатая Вебмастерская
						<p className="event__date">Митап прошел 22 марта в 18.00 по местному времени</p>
						<p className="event__location">Москва ул Толстого 16</p>
					</h1>
				</div>
				<div className="event__image">
					<img src={EventImage} alt="event image" />
				</div>
			</div>
			<div className="event__columns">
				<div className="event__column1">
					<div className="navbar">
						<p className="navbar__tag">Видео</p>
						<p className="navbar__tag">О мероприятии</p>
						<p className="navbar__tag">Программа</p>
						<p className="navbar__tag">Спикеры</p>
					</div>
				</div>
				<div className="event__column2">
					<div className="event__about">
						<h2 className="event__video-title">Видео</h2>
						<div className="">
							<iframe className="event__video" width="560" height="315" src="https://www.youtube.com/embed/jNQXAC9IVRw" allow="autoplay; encrypted-media"></iframe>
						</div>
						<h2 className="event__docs">Доклады
							<a className="event__doc-link" href="/">Ссылка на документ</a>
							<a className="event__doc-link" href="/">Ссылка на документ</a>
						</h2>
						<h2 className="event__description">О мероприятии
							<p className="event__description-p">Приглашаем практикующих разработчиков С++ и энтузиастов языка на встречу Российской рабочей группы по стандартизации С++ (РГ21 С++). На мероприятии обсудим новости последних встреч Международного комитета по стандартизации C++, самые интересные новинки C++26, когда ждать рефлексию и std:get для пользовательских структур.
								Руководитель РГ21 С++ Антон Полухин ответит на вопросы о возможностях для российских разработчиков участвовать в развитии стандарта языка. А ещё мы вместе погенерим идеи для новых изменений!
								Встреча пройдёт в офисе Яндекса в Санкт-Петербурге. Так же будет онлайн трансляция. Всем зарегистрированным отправим ссылку на трансляцию.</p>
						</h2>
						<h2 className="event__speakers-title">Спикеры</h2>
						<div className="event__speakers">
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
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
