import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import EventsCardUp from "../EventsCardUp/EventsCardUp";
import EventsCardPast from "../EventsCardPast/EventsCardPast";
import './EventsCardList.scss';

function PastEvents() {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
      setPage(value);
    };

    return (
        <section className='events-cardlist'>
            <div className="events-cardlist__filters">
                <div className="events__cardlist__container-filter">
                    <label className="events-cardlist__label">Тема:
                    <select className="events-cardlist__select">
                        <option className="events-cardlist__filters-option">Разработка</option>
                        <option className="events-cardlist__filters-option">Маркетинг</option>
                        <option className="events-cardlist__filters-option">Менеджмент</option>
                        <option className="events-cardlist__filters-option">Анализ данных</option>
                        <option className="events-cardlist__filters-option">Дизайн</option>
                    </select>
                    </label>
                </div>
                <div className="events-cardlist__container-filter">
                    <label className="events-cardlist__label">Формат:
                    <select className="events-cardlist__select">
                        <option className="events-cardlist__filters-option">Онлайн</option>
                        <option className="events-cardlist__filters-option">Офлайн</option>
                    </select>
                    </label>
                </div>
                <div className="events-cardlist__container-filter">
                    <label className="events-cardlist__label">Город:
                    <select className="events-cardlist__select">
                        <option className="events-cardlist__filters-option">Москва</option>
                        <option className="events-cardlist__filters-option">Санкт-Петербург</option>
                    </select>
                    </label>
                </div>
                <div className="events-cardlist__container-filter">
                    <label className="events-cardlist__label">Год:
                    <select className="events-cardlist__select">
                        <option className="events-cardlist__filters-option">2024</option>
                    </select>
                    </label>
                </div>
                <div className="events-cardlist__container-button">
                    <button className="events-cardlist-button">Сбросить фильтры</button>
                </div>
            </div>
            <h2 className="events-cardlist__title-up">Предстоящие</h2>
            <ul className='events-cardlist__container-up'>
                <EventsCardUp />
                <EventsCardUp />
                <EventsCardUp />
                <EventsCardUp />
                <EventsCardUp />
                <EventsCardUp />
                <EventsCardUp />
            </ul>
            <div className="events-cardlist__pagination">
                <Stack spacing={2}>
                <Pagination count={1} page={page} onChange={handleChange} />
                </Stack>
            </div>
            <h2 className="events-cardlist__title-past">Прошедшие</h2>
            <ul className='events-cardlist__container-past'>
                <EventsCardPast />
                <EventsCardPast />
                <EventsCardPast />
                <EventsCardPast />
                <EventsCardPast />
                <EventsCardPast />
                <EventsCardPast />
                <EventsCardPast />
            </ul>
            <div className="events-cardlist__pagination">
                <Stack spacing={2}>
                <Pagination count={3} page={page} onChange={handleChange} />
                </Stack>
            </div>
        </section>
    );
};

export default PastEvents;