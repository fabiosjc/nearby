import React, { useState, useEffect, useContext, Fragment } from 'react';
import {
  VenuesContainer,
  LoadingContainer,
  ListContainer,
  ListItem,
} from './styles';
import { VenuesService } from '../../services/VenuesService';
import GridLoader from 'react-spinners/GridLoader';
import { PositionContext } from '../../shared/PositionContext';
import { EmptyList } from './EmptyList';
import { DataParser } from './parser';
import { get } from 'lodash';
import { useToasts } from 'react-toast-notifications';
import { Welcome } from '../Welcome';

export const Venues = () => {
  const { addToast } = useToasts();
  const [categories, setCategories] = useState(new Map());
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useContext(PositionContext);
  const [isSearchOnInit, setIsSearchOnInit] = useState(false);
  const [showWelcome, setShowWelcome] = useState();

  useEffect(() => {
    setShowWelcome(true);
  }, []);

  useEffect(() => {
    fetchVenues();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  const fetchVenues = async () => {
    // Avoid initial search (Just to show the EmptyList)
    if (!isSearchOnInit) {
      setIsSearchOnInit(true);
      return;
    }

    setIsLoading(true);
    const result = await VenuesService.fetchVenues(position);

    if (!result) {
      addToast('Informe a location to get a list of recommended places', {
        appearance: 'info',
      });
      setIsLoading(false);
      return;
    }

    const parsedData = DataParser.getItemsByCategory(result.data);
    setCategories(parsedData);

    const { lat, lng } = get(result, 'data.response.geocode.center', {});
    const isPositionChanged =
      lat && lng && lat !== position.latitude && lng !== position.longitude;

    if (position.location && isPositionChanged) {
      setPosition({ ...position, latitude: lat, longitude: lng });
    }

    setShowWelcome(false);
    setIsLoading(false);
  };

  const getCategoryByKey = entryMap => {
    const [key, values] = entryMap;

    const data = values.find(item => {
      const [category] = item.venue.categories;
      return category.id === key;
    });

    const [category] = data.venue.categories;
    return category;
  };

  return (
    <VenuesContainer>
      <LoadingContainer className="loader-container" isLoading={isLoading}>
        <GridLoader
          color={'#222'}
          loading={isLoading}
          size={15}
          style={{ display: 'block', margin: '0 auto', borderColor: 'red' }}
        />
      </LoadingContainer>
      {showWelcome ? (
        <Welcome />
      ) : (
        <Fragment>
          {categories.size === 0 ? (
            <EmptyList />
          ) : (
            <ListContainer>
              {[...categories.entries()].map(entryMap => {
                const category = getCategoryByKey(entryMap);
                const image = !category
                  ? ''
                  : category.icon.prefix.replace(
                      'https://ss3.4sqi.net',
                      'https://api.foursquare.com'
                    );
                const [categoryId, venues] = entryMap;

                return (
                  <Fragment key={categoryId}>
                    <div className="category">
                      <img
                        src={`${image}64${category.icon.suffix}`}
                        alt=""
                        className="category-img"
                      />
                      {category.pluralName}
                    </div>
                    {venues.map(item => {
                      return (
                        <ListItem key={item.venue.id}>
                          <h3>{item.venue.name}</h3>
                          <div className="address">
                            {item.venue.location.formattedAddress.join(', ')}
                          </div>
                        </ListItem>
                      );
                    })}
                  </Fragment>
                );
              })}
            </ListContainer>
          )}
        </Fragment>
      )}
    </VenuesContainer>
  );
};
