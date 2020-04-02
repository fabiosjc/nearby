import axios from 'axios';
import { REVERSE_API } from '../constants/hosts';

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
};

export { MapService };
