import { useState } from 'react';

export const PARAMS_DEFAULT = {
  query: '',
  radius: 2217,
  location: '',
  venueType: '',
  isUsingLatLon: true,
};

function useFoursquare(props) {
  const [params, setParams] = useState({ ...PARAMS_DEFAULT, props });

  return { params, setParams };
}

export { useFoursquare };
