import React, { Component } from 'react'
import Event from './Event';
export default class EventList extends Component {
    render() {
        const { events } = this.props;
        return (
          <ul className="EventList">
            {events.map((event, key) =>
              <li key={key}>
                <Event event={event} />
              </li>
            )}
          </ul>
        );
      }
}
