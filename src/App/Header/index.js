import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { SearchLocation } from '../../components/SearchLocation';
import { HeaderBox } from './styles';

export const Header = () => {
  return (
    <HeaderBox>
      <nav id="nav-header">
        <h2 className="items">
          Nearby <FontAwesomeIcon icon={faLocationArrow} />
        </h2>
        <SearchLocation className="search" />
      </nav>
    </HeaderBox>
  );
};
