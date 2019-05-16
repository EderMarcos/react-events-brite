import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Formulario extends Component {

  event = React.createRef();
  category = React.createRef();

  onSearch = e => {
    e.preventDefault();
    this.props.onSubmit({
      q: this.event.current.value,
      category: this.category.current.value
    });
    e.currentTarget.reset();
  };

  render() {
    const { categories } = this.props;

    return (
      <form className="uk-grid-small uk-margin-medium" uk-grid="true" onSubmit={ this.onSearch }>
        <div className="uk-width-1-3@s">
          <input className="uk-input" type="text" placeholder="Evento o Ciudad" ref={ this.event } />
        </div>
        <div className="uk-width-1-3@s">
          <select className="uk-select" ref={ this.category } >
            {
              Object.keys(categories).map((category, key) =>
                <option key={ key } value={ categories[category].id }>{ categories[category].short_name }</option>)
            }
          </select>
        </div>
        <div className="uk-width-1-3@s">
          <button className="uk-button uk-button-default uk-button-primary uk-width-1-1" type="submit">Buscar</button>
        </div>
      </form>
    );
  }
}

Formulario.propTypes = {
  categories: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Formulario;
