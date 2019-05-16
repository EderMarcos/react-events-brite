import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Event from './Event/Event';

class Events extends Component {
  render() {
    const { events } = this.props;

    return (
      <div className="uk-grid-small uk-margin-medium" uk-grid="true">
        {
          events.map(event => (
            <div className="uk-width-1-3@s" key={ event.id }>
              <Event event={ event } />
            </div>
          ))
        }
      </div>
    );
  }
}

Events.propTypes = {
  events: PropTypes.array,
};

export default Events;
