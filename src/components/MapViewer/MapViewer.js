import React, {
  useContext,
  useState,
  Fragment,
  useEffect,
  createRef,
} from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapBox } from './styles';
import { PositionContext } from '../../shared/PositionContext';
import { get } from 'lodash';

const AMSTERDAM_COORD = { lat: 52.370216, lon: 4.895168 };

export const MapViewer = () => {
  const [position, setPosition] = useContext(PositionContext);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const markerRef = createRef();

  useEffect(() => {
    const lat = get(position, 'lat', AMSTERDAM_COORD.lat);
    const lon = get(position, 'lon', AMSTERDAM_COORD.lon);
    setLatitude(lat);
    setLongitude(lon);
  }, [position]);

  const updatePosition = () => {
    const marker = markerRef.current;

    if (marker) {
      const { lat, lng } = marker.leafletElement.getLatLng();
      setPosition({ lat: lat, lon: lng });
    }
  };

  return (
    <Fragment>
      {latitude && longitude && (
        <MapBox className="map">
          <Map
            center={[latitude, longitude]}
            zoom={12}
            attributionControl={true}
            zoomControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
          >
            <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
            {latitude && longitude && (
              <Marker
                position={[latitude, longitude]}
                draggable={true}
                onDragend={updatePosition}
                ref={markerRef}
              >
                <Popup>
                  <div>
                    <strong>{`[${latitude}, ${longitude}]`}</strong>
                  </div>
                  <div>{`Drag to change the location`}</div>
                </Popup>
              </Marker>
            )}
          </Map>
          <p className="drag-message">Drag the marker to change the location</p>
        </MapBox>
      )}
    </Fragment>
  );
};
