import React from "react";
import EventsCardList from "../EventsCardList/EventsCardList";
import './Events.scss';

function Events() {

    return (
        <section className="events">
            <EventsCardList />
        </section>
    );
}

export default Events;
