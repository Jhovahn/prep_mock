import React from 'react';
import ReactGA from 'react-ga';

const style = { paddingBottom: '10px' };

const handleClick = () =>
  ReactGA.event({ category: 'User', action: 'Clicked On List Item' });

const ListItem = ({ title, address, telephone }) => (
  <div style={style} onClick={() => handleClick()}>
    <h3>{title}</h3>
    <p>{address}</p>
    <p>{telephone}</p>
  </div>
);

export default ListItem;
