import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { EmptyListContainer } from './styles';

export const EmptyList = () => {
  return (
    <EmptyListContainer>
      <FontAwesomeIcon icon={faRobot} className="logo-icon" />

      <div className="text">
        <span>Sorry, no result found.</span>
        <small>
          What you searched was unfortunately not found or doesn't exist.
        </small>
      </div>
    </EmptyListContainer>
  );
};
