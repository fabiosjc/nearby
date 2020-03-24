import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <header>
      <div>
        Nearby <FontAwesomeIcon icon={faLocationArrow} />
      </div>
    </header>
  );
};
