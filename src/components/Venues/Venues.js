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
import { get } from 'lodash';
import { EmptyList } from './EmptyList';
import { DataParser } from './parser';

export const Venues = () => {
  const [categories, setCategories] = useState(new Map());
  const [isLoading, setIsLoading] = useState(false);
  const [position] = useContext(PositionContext);

  useEffect(() => {
    fetchVenues();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  const fetchVenues = async () => {
    const lat = get(position, 'lat');
    const lon = get(position, 'lon');
    if (!lat || !lon) {
      return;
    }

    setIsLoading(true);
    const result = await VenuesService.fetchVenues(lat, lon);
    const parsedData = DataParser.getItemsByCategory(result.data);
    setCategories(parsedData);
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
              <Fragment>
                <div className="category">
                  <img
                    key={categoryId}
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
    </VenuesContainer>
  );
};
