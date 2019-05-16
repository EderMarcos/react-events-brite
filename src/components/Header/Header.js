import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <header className="uk-margin-medium uk-flex uk-flex-center uk-flex-middle">
        { this.props.title }
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
