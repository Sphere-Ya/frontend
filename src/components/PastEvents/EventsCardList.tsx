import EventsCard from "../EventsCard/EventsCard";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './PastEvents.css';

function PastEvents() {
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
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
            <Stack spacing={2} >
                <Pagination count={3} page={page} onChange={handleChange} />
            </Stack>
        </section>
    );
};

export default PastEvents;