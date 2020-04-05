import React, { Fragment } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { MapViewer } from '../MapViewer';
import { Header } from '../../App/Header';
import { PositionProvider } from '../../shared/PositionContext';
import { Venues } from '../Venues';
import { SearchLocation } from '../SearchLocation';

export const Home = () => {
  return (
    <Fragment>
      <PositionProvider>
        <ToastProvider autoDismiss autoDismissTimeout={5000}>
          <Header />
          <main>
            <SearchLocation className="search" />
            <MapViewer />
            <Venues />
          </main>
        </ToastProvider>
      </PositionProvider>
    </Fragment>
  );
};
