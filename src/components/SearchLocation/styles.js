import styled from 'styled-components';

const SearchBox = styled.div`
  position: relative;
  margin: 10px 0;
  width: 100%;
  background: #f7f7f7;
  border-radius: 5px 5px 5px 5px;

  .search-field {
    display: flex;
    height: 50px;
    width: 100%;
    padding-left: 20px;
    padding-right: 42px;
    border: 1px solid #f2f2f2;
    font-size: 1rem;
  }

  .suggestions {
    position: absolute;
    z-index: 100;
    background: #fff;
    width: 100%;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.05);
    border-radius: 0 0 6px 6px;
    font-size: 13px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-top: none;
    max-height: 290px;
    overflow-x: auto;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    padding: 8px;

    font-size: 16px;
    color: darkgray;
  }

  .suggestion {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .suggestion:hover {
    color: #000;
    cursor: pointer;
  }

  .locationIcon {
    border-radius: 16px;
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 9px;
    padding: 9px;
    display: inline-flex;
    background: #f3f3f3;
    border: 1px solid #eee;
  }

  .location-text {
    margin-left: 10px;
  }

  .nearestInfo {
    position: relative;
    width: 100%;
  }

  a.permission-btn {
    color: ${props => props.theme.midGray};
    text-decoration: none;
    display: block;
    padding: 5px;
  }

  a.permission-btn:hover {
    color: ${props => props.theme.background.default};
    border-radius: 20px;
    .locationIcon {
      background: lavenderblush;
    }
  }
`;

export { SearchBox };
