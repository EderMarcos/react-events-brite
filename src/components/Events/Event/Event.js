import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Event extends Component {
  render() {
    const { summary, logo, url, name, status } = this.props.event;

    return (
      <div className="uk-card uk-card-default">
        <div className="uk.card-media-top">
          {
            logo.url !== null ? <img src={ logo.url } alt={ name.text }/> : ''
          }
        </div>
        <div className="uk-card-body">
          {
            status ? <div className="uk-card-badge uk-label">{ status }</div> : ''
          }
          <h3 className="uk-card-title">{ name.text }</h3>
          <p>{ summary }</p>
        </div>
        <div className="uk-card-footer">
          <a href={ url } target="_blank" rel="noopener noreferrer" className="uk-button uk-button-text">Read more</a>
        </div>
      </div>
    );
  }
}

Event.propTypes = {
  event: PropTypes.shape({
    summary: PropTypes.string.isRequired,
    logo: PropTypes.any.isRequired,
    url: PropTypes.string.isRequired,
    name: PropTypes.any.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default Event;
