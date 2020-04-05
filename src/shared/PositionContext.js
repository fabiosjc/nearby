import React, { createContext } from 'react';
import { useFoursquare } from '../components/SearchParams/hooks';

const PositionContext = createContext();

// Create a provider for components to consume and subscribe to changes
const PositionProvider = props => {
  const { params: position, setParams: setPosition } = useFoursquare();

  return (
    <PositionContext.Provider value={[position, setPosition]}>
      {props.children}
    </PositionContext.Provider>
  );
};

export { PositionContext, PositionProvider };
