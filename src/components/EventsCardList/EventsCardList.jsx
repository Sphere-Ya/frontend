import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import EventsCard from "../EventsCard/EventsCard";
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
                            <option className="events-cardlist__filters-option">Все темы</option>
                        </select>
                    </label>
                </div>
                <div className="events-cardlist__container-filter">
                    <label className="events-cardlist__label">Формат:
                        <select className="events-cardlist__select">
                            <option className="events-cardlist__filters-option">Онлайн или офлайн</option>
                        </select>
                    </label>
                </div>
                <div className="events-cardlist__container-filter">
                    <label className="events-cardlist__label">Город:
                        <select className="events-cardlist__select">
                            <option className="events-cardlist__filters-option">Название города</option>
                        </select>
                    </label>
                </div>
                <div className="events-cardlist__container-filter">
                    <label className="events-cardlist__label">Год:
                        <select className="events-cardlist__select">
                            <option className="events-cardlist__filters-option">За все время</option>
                        </select>
                    </label>
                </div>
                <div className="events-cardlist__container-button">
                    <button className="events-cardlist-button">Сбросить фильтры</button>
                </div>
            </div>
            <h2 className="events-cardlist__title-up">Предстоящие</h2>
            <ul className='events-cardlist__container-up'>
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
            </ul>
            <h2 className="events-cardlist__title-past">Прошедшие</h2>
            <ul className='events-cardlist__container-past'>
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
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
