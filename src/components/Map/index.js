import React from 'react';
import { MapBox } from './styled';

export const Map = ({ position }) => {
  return <MapBox className="map">Position: {JSON.stringify(position)}</MapBox>;
};
