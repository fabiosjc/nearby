import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { EmptyListContainer } from './styles';

export const EmptyList = () => {
  return (
    <EmptyListContainer>
      <FontAwesomeIcon icon={faLocationArrow} className="logo-icon" />

      <div className="text">
        Get a list of recommended venues <em>Nearby</em> you
      </div>
    </EmptyListContainer>
  );
};
