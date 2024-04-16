import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./EventPage.scss"
import EventImage from "../images/Image.svg"

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
							<iframe className="event__video" width="560" height="315" src="https://www.youtube.com/embed/YhyRZ9ovAq4?si=J7RDuyh6ZsTge46i" title="YouTube video player" allow="autoplay; encrypted-media"></iframe>
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
								<img className="speaker-photo" src="https://s3-alpha-sig.figma.com/img/13ea/a0cb/a99b42cd3f6f547246e1f9cd3a651a42?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qq9G3qyL0iQonbA3N7udQjv4SJhfEhBK7JebYiCGDbChtuBoDW8fA~gXFA3JC-WZ8~DmowpCJAz1-F0N1I6fIFr3RvO29ou5jJV1YFx4S1sKtmaKQdABeVidUKW9Qi4sWYYWqsRg0igRk21sjgQ~TGy8cjWM03V1oDBx1R5m~ZHyVVKp7ohUJ8kF3OoZ-y--rI0dF5wzyRxYwRJKJdOwfMq2awSxQTmZ0U6WOyKEO-c30SRBCE34sadAV5X7WUc9MCgeVyeD3vXHdZcIIhTN21anh~MMKcrtk-fieKnihit6otmF0lVuTJN1N8z94z5sL7pusjOYBynBY78dnnY~Ng__"></img>
								<h2 className="event__speaker-name">Михаил Борисов</h2>
								<p className="event__speaker-job">Яндекс Go</p>
								<p className="event__speaker-position">Руководитель группы разработки общих компонентов</p>
							</div>
							<div className="event__speaker">
								<img className="speaker-photo" src="https://s3-alpha-sig.figma.com/img/7b88/1fdb/85bb62d2ee7a6bdbc2741d29509f0b15?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bl-4RshjxmXDhMKFa-t~x68VQDZHBn8I~s0t9Bd~Kevm6N~-dvfi0f0m684vGrNIAkkzyoqfNO35aRRv1mpE3RTOEoGxSP3TkofQ6Zqdv445mGhh-P0uWrtMFwvncj-GU5wQ7SE-h2BTppEubYfSH90BdMkgahUIOivhIFajxOEqfqTbXWn1DGEyH4cJAccpdsiCXyxC15l2-2y8mw0C2oTVLvU9TLpCW2ArC4QADfuSXNYrp0daega9hb8mukcFXjj0tzKfD4O7c4uy6i-LOQJBrfdHCyPYLdveGgrLu5muFoZjvuzofytw7faPcwrYUE5jBMxggxch3snrv50Uuw__"></img>
								<h2 className="event__speaker-name">Станислав Константинов</h2>
								<p className="event__speaker-job">Яндекс Go</p>
								<p className="event__speaker-position">Руководитель группы разработки общих компонентов</p>
							</div>
							<div className="event__speaker">
								<img className="speaker-photo" src="https://s3-alpha-sig.figma.com/img/6852/0033/4f1ee62ac98f99ac2d0e30a48326f347?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MDrpMSDK7Dikx59vEAaXdSwinwVNoNt6LIpbAl2iExnC065Ihb08h5Yrg9d1sQXC39QMAoXnan~Um8A7Anx2N6l5X3dyEJOlpjNQBPpaEmQ3CtvZDnIdYkRdROCwyXEdmWNmBkwTeglNfPK~cHKK9CXj~heinBl-RyJIes-AZtkUWLHB09dQGBVJHnrnwRG4qZyHI7H5X62ko6G3GFgp7eMkUWRSYrCvpNNsxWGp-VVwKJxdtHUYaXxab2Rys-BNEYrrqYJmaOgpPrb1~KJz7dDd3~mjmPmOdA0lfkuH~QJkLMh7wcrgk3FPNLThV6aoabvVi7yiiSbQmAlXop5Tcw__"></img>
								<h2 className="event__speaker-name">Евгений Иванов</h2>
								<p className="event__speaker-job">Яндекс Go</p>
								<p className="event__speaker-position">Руководитель группы разработки C++</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

