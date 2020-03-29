import axios from 'axios';
import {
  FOURSQUARE_PLACES_API,
  REVERSE_API,
  FOURSQUARE_CLIENT_ID,
  FOURSQUARE_CLIENT_SECRET,
  FOURSQUARE_API_VERSION,
} from '../constants/hosts';
import * as data from '../mocks/venues.json';

const MapService = {
  /**
   * Method required to display the name of the user's current location
   */
  getCurrentLocation: async userLocation => {
    const { coords } = userLocation;
    const result = await axios.get(
      `${REVERSE_API}/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`
    );
    return result.data;
  },

  fetchVenues: async () => {
    //TODO replace mock
    setTimeout(() => {
      return data;
    }, 500);

    // return await axios.get(
    //   `${FOURSQUARE_PLACES_API}/explore?client_id=${FOURSQUARE_CLIENT_ID}&client_secret=${FOURSQUARE_CLIENT_SECRET}&v=${FOURSQUARE_API_VERSION}&ll=${latitude},${longitude}`
    // );
  },
};

export { MapService };
