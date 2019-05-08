import React, { Component } from 'react';
import ReactGA from 'react-ga';
import data from './data.json';
import Map from './Map';
import ListItem from './ListItem';
import './App.css';
require('dotenv').config();

(function initalizeReactGA() {
  ReactGA.initialize('UA-139884750-1');
  ReactGA.pageview('/homepage');
})();

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      center: { lat: 40.6903, lng: -73.9272 },
      zoom: 13
    };
  }
  getData = () => {
    this.setState({ data: data });
    ReactGA.event({
      category: 'User',
      action: 'Clicked Find Locations'
    });
  };

  render() {
    return (
      <body className="App">
        <div>
          <p>PrEP Me</p>
          <button
            style={{ marginBottom: '10px' }}
            onClick={() => this.getData()}
          >
            Find Locations
          </button>
          <Map
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
            }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
            data={this.state.data}
          />

          {this.state.data.map(el => (
            <ListItem
              title={el.title}
              address={el.field_address}
              telephone={el.field_phone}
            />
          ))}
        </div>
      </body>
    );
  }
}

export default App;
