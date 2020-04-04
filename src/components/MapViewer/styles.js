import styled from 'styled-components';

const MapBox = styled.section`
  height: 40vh;
  padding: 10px;
  padding: 14px 18px 18px 18px;

  .drag-message {
    font-size: 15px;
    text-align: right;
    padding: 5px 0;
    color: gray;
  }

  .leaflet-container {
    height: 100%;
    border: 1px solid #fff;
    border-radius: 20px;
    box-shadow: 0px 1px 4px 2px #ddd;
  }
`;

export { MapBox };
