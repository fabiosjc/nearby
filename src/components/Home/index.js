import React, { Fragment } from 'react';
import { Map } from '../Map';
import { Header } from '../../App/Header';

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Map />
      </main>
    </Fragment>
  );
};
