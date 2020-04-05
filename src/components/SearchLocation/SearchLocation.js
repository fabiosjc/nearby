import React, { useState, useEffect, useContext, Fragment } from 'react';
import { useToasts } from 'react-toast-notifications';
import { isEmpty } from 'lodash';
import { MapService } from '../../services/MapService';
import { Loader } from '../Loader';
import { SearchBox, InputBox } from './styles';
import { PositionContext } from '../../shared/PositionContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useFoursquare } from '../SearchParams/hooks';

const PERMISSION_DENIED = 1;
const POSITION_UNAVAILABLE = 2;
const TIMEOUT = 3;

function SearchLocation({ className }) {
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [position, setPosition] = useContext(PositionContext);
  const { addToast } = useToasts();
  const { params, setParams } = useFoursquare();

  const onSearch = () => {
    setPosition({
      ...position,
      ...params,
      isUsingLatLon: isEmpty(params.location),
    });
  };

  const getCurrentPosition = () => {
    setParams({ ...params, location: '' });
    const geoOptions = {
      timeout: 10 * 1000,
    };

    setIsSearching(true);

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

    setPosition({
      ...position,
      ...params,
      latitude: newPosition.lat,
      longitude: newPosition.lon,
      isUsingLatLon: true,
      location: '',
    });
    setIsSearching(false);
  };

  const geoError = function(error) {
    console.log('Error occurred. Error code: ' + error.code);
    let alertMsg;

    switch (error.code) {
      case PERMISSION_DENIED:
        alertMsg = {
          message: `You need to enable geolocation in order to use this functionality.`,
          status: 'info',
        };
        break;
      case POSITION_UNAVAILABLE:
        alertMsg = {
          message: 'The acquisition of the geolocation failed.',
          status: 'error',
        };
        break;
      case TIMEOUT:
        alertMsg = {
          message: 'Time out when retrieving location. Please try again later.',
          status: 'error',
        };
        break;
      default:
        alertMsg = {
          message:
            'Retrieving the current location failed. Please inform a location in the search field.',
          status: 'error',
        };
        break;
    }

    console.log(`SearchLocation error: ${JSON.stringify(alertMsg)}`);

    addToast(alertMsg.message, {
      appearance: alertMsg.status,
      autoDismiss: true,
    });

    setIsSearching(false);
  };

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <SearchBox>
      <div>Params: {JSON.stringify(params)}</div>
      <InputBox className={className}>
        <Loader isLoading={isSearching} />
        <fieldset>
          <input
            type="text"
            className="search-field"
            placeholder="Inform a location"
            onClick={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            value={params.location}
            onChange={event =>
              setParams({
                ...params,
                location: event.target.value,
                isUsingLatLon: false,
              })
            }
            onKeyDown={onKeyDown}
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
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
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
        </fieldset>
      </InputBox>

      <fieldset className="advanced-search">
        <label htmlFor="query">Search By</label>
        <input
          id="query"
          name="query"
          placeholder="Looking for..."
          value={params.query}
          onChange={event =>
            setParams({ ...params, query: event.target.value })
          }
          onKeyDown={onKeyDown}
        />
      </fieldset>

      <button className="search-btn" onClick={onSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </SearchBox>
  );
}

export { SearchLocation };
