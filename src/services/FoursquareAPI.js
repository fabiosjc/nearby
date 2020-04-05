import { MapService } from './MapService';
import { VenuesService } from './VenuesService';

const FoursquareAPI = {
  /**
   * Method required to display the name of the user's current location
   */
  getCurrentLocation: async userLocation => {
    return MapService.getCurrentLocation(userLocation);
  },

  fetchVenues: async (latitude, longitude) => {
    return VenuesService.fetchVenues(latitude, longitude);
  },
};

export { FoursquareAPI };
