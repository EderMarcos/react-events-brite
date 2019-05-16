import React, { Component } from 'react';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import Events from './components/Events/Events';

class App extends Component {

  token = 'IZYSFZZZYXDC56WOUSHH';
  url = 'https://www.eventbriteapi.com/v3/';

  state = {
    events: [],
    categories: []
  };

  componentDidMount() {
    this.getEntities();
  }

  getEntities = async () => {
    await fetch(`${ this.url }categories/?token=${ this.token }`)
      .then(res => res.json())
      .then(res => res.categories)
      .then(categories => this.setState({ categories }))
      .catch()
  };

  getEvents = async data => {
    await fetch(`${ this.url }events/search/?q=${ data.q }&categories=${ data.category }&token=${ this.token }`)
      .then(res => res.json())
      .then(res => res.events)
      .then(events => this.setState({ events }))
      .catch()
  };

  render() {
    return (
      <div className="App">
        <Header title="Events" />
        <div className="uk-container">
          <Formulario categories={ this.state.categories } onSubmit={ this.getEvents } />
          <Events events={ this.state.events } />
        </div>
      </div>
    );
  }
}

export default App;
