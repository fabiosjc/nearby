import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchParamsBox } from './styles';
import { useFoursquare } from './hooks';
import { FoursquareAPI } from '../../services/FoursquareAPI';
import { PositionContext } from '../../shared/PositionContext';

export const SearchParams = () => {
  const { params, setParams } = useFoursquare();
  const [position, setPosition] = useContext(PositionContext);

  const onSearch = () => {
    setPosition({
      ...position,
      ...params,
      isUsingLatLon: false,
      location: position.isUsingLatLon ? '' : params.location,
    });
  };

  return (
    <SearchParamsBox>
      <fieldset>
        <label htmlFor="query">Search By</label>
        <input
          id="query"
          name="query"
          placeholder="e.g. tacos"
          value={params.query}
          onChange={event =>
            setParams({ ...params, query: event.target.value })
          }
        />
      </fieldset>

      <fieldset>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          placeholder="e.g São Paulo"
          defaultValue={position.location}
          value={params.location}
          onChange={event =>
            setParams({ ...params, location: event.target.value })
          }
        />
      </fieldset>

      <fieldset>
        <label htmlFor="venue-type">Venue Type</label>
        <input
          id="venue-type"
          name="venueType"
          placeholder="Venue Type"
          value={params.venueType}
          onChange={event =>
            setParams({ ...params, venueType: event.target.value })
          }
        />
      </fieldset>

      <fieldset>
        <label htmlFor="radius">Radius:</label>
        <input
          type="range"
          id="radius"
          name="radius"
          placeholder="Radius"
          min="0"
          max="3000"
          step="100"
          value={params.radius}
          onChange={event =>
            setParams({ ...params, radius: event.target.value })
          }
        />
      </fieldset>

      <button>
        <FontAwesomeIcon icon={faSearch} onClick={onSearch} />
      </button>
    </SearchParamsBox>
  );
};
