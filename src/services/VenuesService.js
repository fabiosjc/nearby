import axios from 'axios';
import {
  FOURSQUARE_PLACES_API,
  FOURSQUARE_CLIENT_ID,
  FOURSQUARE_CLIENT_SECRET,
  FOURSQUARE_API_VERSION,
} from '../constants/hosts';
import { isEmpty } from 'lodash';

const VenuesService = {
  fetchVenues: async ({
    latitude,
    longitude,
    query,
    radius,
    location,
    isUsingLatLon,
    venueType,
  }) => {
    if (!latitude && !longitude && isEmpty(location)) {
      return;
    }

    const geoparam =
      isUsingLatLon || isEmpty(location)
        ? `ll=${latitude},${longitude}`
        : `near=${location}`;

    const VENUE_API = `${FOURSQUARE_PLACES_API}/explore?client_id=${FOURSQUARE_CLIENT_ID}&client_secret=${FOURSQUARE_CLIENT_SECRET}&v=${FOURSQUARE_API_VERSION}&query=${query}&radius=${radius}&section=${venueType}&${geoparam}`;
    return await axios.get(VENUE_API);
  },
};

export { VenuesService };
