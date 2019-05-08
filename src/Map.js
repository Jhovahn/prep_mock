import React from 'react';
import GoogleMapReact from 'google-map-react';
import pin from './pin.svg';

const pinClickHandler = (title, address) => alert(`${title} \n${address}`);

const Marker = ({ src, text, title, address }) => (
  <div onClick={() => pinClickHandler(title, address)}>
    <img src={src} alt="pin" />
  </div>
);

const Map = ({ bootstrapURLKeys, defaultCenter, defaultZoom, data }) => {
  let parsedData = data.map(dataPoint => [
    dataPoint.title,
    JSON.parse(dataPoint.field_location),
    dataPoint.field_address
  ]);
  return (
    <div style={{ height: `100vh`, width: `100%` }}>
      <GoogleMapReact
        bootstrapURLKeys={bootstrapURLKeys}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
      >
        {parsedData.map(parsedDataPoint => (
          <Marker
            src={pin}
            title={parsedDataPoint[0]}
            lat={parsedDataPoint[1].lat}
            lng={parsedDataPoint[1].lng}
            address={parsedDataPoint[2]}
          />
        ))}
        {console.log(`welp`, parsedData)}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
