import React, { Component } from 'react';
import data from './data.json';
import Map from './Map';
import './App.css';
require('dotenv').config();

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
    console.log(data);
  };

  render() {
    return (
      <div className="App">
        <body>
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
            <div style={{ paddingBottom: '10px' }}>
              <h3>{el.title}</h3> <p>{el.field_address}</p>
            </div>
          ))}
        </body>
      </div>
    );
  }
}

export default App;
