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

export const MapViewer = () => {
  const [position, setPosition] = useContext(PositionContext);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const markerRef = createRef();

  useEffect(() => {
    const lat = get(position, 'latitude');
    const lon = get(position, 'longitude');
    setLatitude(lat);
    setLongitude(lon);
  }, [position]);

  const updatePosition = () => {
    const marker = markerRef.current;

    if (marker) {
      const { lat, lng } = marker.leafletElement.getLatLng();
      //marker should use latitude and longitude instead of location name
      setPosition({
        ...position,
        latitude: lat,
        longitude: lng,
        location: '',
        isUsingLatLon: true,
      });
    }
  };

  return (
    <Fragment>
      {latitude && longitude && (
        <MapBox className="map">
          <Map
            center={[position.latitude, position.longitude]}
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
            {position.latitude && position.longitude && (
              <div>
                <Marker
                  position={[position.latitude, position.longitude]}
                  draggable={true}
                  onDragend={updatePosition}
                  ref={markerRef}
                >
                  <Popup>
                    <div>
                      <strong>{`[${position.latitude}, ${position.longitude}]`}</strong>
                    </div>
                    <div>{`Drag to change the location`}</div>
                  </Popup>
                </Marker>
              </div>
            )}
          </Map>
          <p className="drag-message">Drag the marker to change the location</p>
        </MapBox>
      )}
    </Fragment>
  );
};
