import axios from 'axios';
import {
  FOURSQUARE_PLACES_API,
  FOURSQUARE_CLIENT_ID,
  FOURSQUARE_CLIENT_SECRET,
  FOURSQUARE_API_VERSION,
} from '../constants/hosts';

const VenuesService = {
  fetchVenues: async (latitude, longitude) => {
    return await axios.get(
      `${FOURSQUARE_PLACES_API}/explore?client_id=${FOURSQUARE_CLIENT_ID}&client_secret=${FOURSQUARE_CLIENT_SECRET}&v=${FOURSQUARE_API_VERSION}&ll=${latitude},${longitude}`
    );
  },
};

export { VenuesService };
