import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { HeaderBox } from './styles';

export const Header = () => {
  return (
    <HeaderBox>
      <nav id="nav-header">
        <h1 className="items brand">
          <span className="logo">Nearby</span>
          <FontAwesomeIcon icon={faLocationArrow} />
        </h1>
      </nav>
    </HeaderBox>
  );
};
