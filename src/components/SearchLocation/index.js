import React, { useState, useEffect, useContext } from 'react';
import { useToasts } from 'react-toast-notifications';
import { get } from 'lodash';
import { MapService } from '../../services/MapService';
import { Loader } from '../Loader';
import { SearchBox } from './styles';
import { PositionContext } from '../../shared/PositionContext';

function SearchLocation({ className }) {
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [position, setPosition] = useContext(PositionContext);
  const [currentLocation, setCurrentLocation] = useState('');
  const { addToast } = useToasts();

  useEffect(() => {
    const getLocationAsString = () => {
      const city = get(position, 'address.city');

      if (city) {
        return `Current Location (${city})`;
      }

      const latitude = get(position, 'lat');
      const longitude = get(position, 'lon');

      return latitude && longitude ? `[${latitude} , ${longitude}]` : '';
    };

    const location = getLocationAsString();

    setCurrentLocation(location);
  }, [position]);

  const onSearchClick = () => {
    setCurrentLocation('');
    setShowSuggestion(true);
  };

  const getCurrentPosition = () => {
    const geoOptions = {
      timeout: 10 * 1000,
    };

    setIsSearching(true);
    setCurrentLocation('');

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        geoSuccess,
        geoError,
        geoOptions
      );
    }

    setShowSuggestion(false);
  };

  const geoSuccess = async userPosition => {
    const newPosition = await MapService.getCurrentLocation(userPosition);
    setPosition(newPosition);
    setIsSearching(false);
  };

  const geoError = function(error) {
    console.log('Error occurred. Error code: ' + error.code);
    addToast('Network error when searching', { appearance: 'error' });
    setIsSearching(false);
  };

  return (
    <SearchBox className={className}>
      <Loader isLoading={isSearching} />
      <input
        type="text"
        className="search-field"
        placeholder="Inform a location"
        onClick={() => onSearchClick()}
        onBlur={() => setShowSuggestion(false)}
        value={currentLocation}
        onChange={() => {}}
      />
      {showSuggestion && (
        <div className="suggestions">
          <div className="nearest">
            <div className="suggestion">
              <div className="nearestInfo noPermission">
                <a
                  href="/#"
                  alt="location"
                  className="permission-btn"
                  onMouseDown={getCurrentPosition}
                >
                  <span className="locationIcon">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M13.7168 0.292888C13.4279 0.0030768 12.9909 -0.0805688 12.6153 0.0820253L0.599272 5.30403C0.566883 5.32155 0.535532 5.34091 0.505372 5.36202C0.195712 5.53538 0.00282391 5.86133 0 6.21601V6.67675C0.00548436 6.7198 0.013945 6.76243 0.0253213 6.80432C0.0833152 7.29709 0.499472 7.66956 0.995972 7.67307H5.27633C5.70009 7.67299 6.08277 7.92628 6.24804 8.3162C6.26764 8.38158 6.28106 8.44864 6.28813 8.51652C6.30972 8.5851 6.32387 8.65579 6.33033 8.72739V13.0037C6.33582 13.0467 6.34428 13.0894 6.35565 13.1312C6.41365 13.624 6.8298 13.9965 7.32631 14H7.78736C8.18352 13.9981 8.5415 13.7635 8.70104 13.4012L11.3134 7.3979L13.9257 1.39464C13.9461 1.33852 13.9613 1.28064 13.971 1.22174C14.0535 0.889004 13.9572 0.537363 13.7168 0.292888Z"
                        fill="rgb(128, 0, 128)"
                      ></path>
                    </svg>
                  </span>
                  <span className="location-text">
                    To see your location, enable location permissions here.
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </SearchBox>
  );
}

export { SearchLocation };
