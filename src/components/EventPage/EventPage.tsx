import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

// Подставить данные с бэка

export const EventPage = () => {
	return (
		<>
			<Header />
			<div className="route">Главная /</div>
			<div className="event__type">Оффлайн + Онлайн</div>
			<div className="event__tags">
				<p>Разработка</p>
				<p>Маркетинг</p>
				<p>Анализ данных</p>
			</div>
			<h1 className="event__name">Двенадцатая Вебмастерская
				<p className="event__date">Митап прошел 22 марта в 18.00 по местному времени</p>
				<p className="event__location">Москва ул Толстого 16</p>
			</h1>
			<div className="navbar">
				<p>Видео</p>
				<p>О мероприятии</p>
				<p>Программа</p>
				<p>Спикеры</p>
			</div>
			<div className="event__about">
				<div className="event__video">Видео
					<iframe width="560" height="315" src="https://www.youtube.com/embed/jNQXAC9IVRw" allow="autoplay; encrypted-media"></iframe>
				</div>
				<div className="event__docs">Доклады
					<p className="event__doc-link">Ссылка на документ</p>
					<p className="event__doc-link">Ссылка на документ</p>
				</div>
				<h2 className="event__description">О мероприятии
					<p className="event__description-p">Приглашаем практикующих разработчиков С++ и энтузиастов языка на встречу Российской рабочей группы по стандартизации С++ (РГ21 С++). На мероприятии обсудим новости последних встреч Международного комитета по стандартизации C++, самые интересные новинки C++26, когда ждать рефлексию и std:get для пользовательских структур.
						Руководитель РГ21 С++ Антон Полухин ответит на вопросы о возможностях для российских разработчиков участвовать в развитии стандарта языка. А ещё мы вместе погенерим идеи для новых изменений!
						Встреча пройдёт в офисе Яндекса в Санкт-Петербурге. Так же будет онлайн трансляция. Всем зарегистрированным отправим ссылку на трансляцию.</p>
				</h2>
				<div className="event__speakers">Спикеры
					<div className="event__speaker">
						<h2 className="event__speaker-name">Антон</h2>
						<p className="event__speaker-job">Яндекс Go</p>
						<p className="event__speaker-position">Руководитель группы разработки общих компонентов</p>
					</div>
					<div className="event__speaker">
						<h2 className="event__speaker-name">Константин</h2>
						<p className="event__speaker-job">Яндекс Go</p>
						<p className="event__speaker-position">Руководитель группы разработки общих компонентов</p>
					</div>
					<div className="event__speaker">
						<h2 className="event__speaker-name">Эрмедек</h2>
						<p className="event__speaker-job">Яндекс Go</p>
						<p className="event__speaker-position">Руководитель группы разработки общих компонентов</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
