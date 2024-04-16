import React from "react";
import PastEvents from "../EventsCardList/EventsCardList";
import './Events.scss';

function Events() {

    return (
        <section className="events">
            <PastEvents />
        </section>
    );
}

export default Events;
