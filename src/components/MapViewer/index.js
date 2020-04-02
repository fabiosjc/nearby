import React, { useContext, useState, Fragment, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapBox } from './styles';
import { PositionContext } from '../../shared/PositionContext';
import { get } from 'lodash';

const AMSTERDAM_COORD = { lat: 52.370216, lon: 4.895168 };

export const MapViewer = () => {
  const position = useContext(PositionContext);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  useEffect(() => {
    const lat = get(position[0], 'lat', AMSTERDAM_COORD.lat);
    const lon = get(position[0], 'lon', AMSTERDAM_COORD.lon);
    setLatitude(lat);
    setLongitude(lon);
  }, [position]);

  return (
    <Fragment>
      {latitude && longitude && (
        <MapBox className="map">
          <Map
            center={[latitude, longitude]}
            zoom={6}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
          >
            <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
            <Marker
              position={[latitude, longitude]}
              draggable={true}
              // onDragend={.updatePosition}
              // ref={this.refmarker}
            >
              ><Popup>Current location. Drag to change the location</Popup>
            </Marker>
          </Map>
        </MapBox>
      )}
    </Fragment>
  );
};
