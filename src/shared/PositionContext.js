import React, { useState, createContext } from 'react';

const DEFAULT_POSITION = { coords: {} };

const PositionContext = createContext();

// Create a provider for components to consume and subscribe to changes
const PositionProvider = props => {
  const [position, setPosition] = useState(DEFAULT_POSITION);

  return (
    <PositionContext.Provider value={[position, setPosition]}>
      {props.children}
    </PositionContext.Provider>
  );
};

export { PositionContext, PositionProvider };
