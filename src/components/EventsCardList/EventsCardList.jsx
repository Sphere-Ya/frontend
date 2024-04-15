import * as React from 'react';
import Typography from '@mui/material/Typography';
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
        <section className='past-events'>
            <h2 className="past-events__title-up">Предстоящие</h2>
            <ul className='past-events__container-up'>
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
            </ul>
            <h2 className="past-events__title-past">Прошедшие</h2>
            <ul className='past-events__container-past'>
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
                <EventsCard />
            </ul>
            <div className="past-events__pagination">
                <Stack spacing={2}>
                <Pagination count={3} page={page} onChange={handleChange} />
                </Stack>
            </div>
        </section>
    );
};

export default PastEvents;