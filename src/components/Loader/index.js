import React, { Fragment } from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateX(-50%) translateY(-50%);

  .loader {
    width: 25px;
    height: 25px;
    border-top: 3px solid
      ${props => props.theme.background.default || 'darkgray'};
    border-radius: 100%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loader = ({ isLoading }) => {
  return (
    <Fragment>
      {isLoading && (
        <LoaderWrapper class="loader-wrapper">
          <div class="loader"></div>
        </LoaderWrapper>
      )}
    </Fragment>
  );
};
