import EventsCard from "../EventsCard/EventsCard";
import React from "react";
import './EventsCardList.scss';

function PastEvents() {

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
        </section>
    );
};

export default PastEvents;