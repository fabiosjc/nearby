import React, { Fragment } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { MapViewer } from '../MapViewer';
import { Header } from '../../App/Header';
import { PositionProvider } from '../../shared/PositionContext';
import { Venues } from '../Venues';

export const Home = () => {
  return (
    <Fragment>
      <PositionProvider>
        <ToastProvider>
          <Header />
          <main>
            <MapViewer />
            <Venues />
          </main>
        </ToastProvider>
      </PositionProvider>
    </Fragment>
  );
};
