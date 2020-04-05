import styled from 'styled-components';

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  width: 100%;

  label {
    display: none;
  }

  input#query {
    height: 50px;
    background: purple;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    width: 15rem;
    font-size: 16px;
    padding: 0 10px;

    ::placeholder {
      color: #ffffff61;
      opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #ffffff61;
    }

    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #ffffff61;
    }
  }

  @media (max-width: 700px) {
    input#query {
      width: 8rem;
      padding-left: 2px;
    }
  }

  button.search-btn {
    height: 48px;
    width: 48px;
    color: #e7e7e7;
    border-radius: 50%;
    font-size: 18px;
    border: none;
    background: inherit;
  }

  button.search-btn:hover {
    color: #fff;
  }
`;

const InputBox = styled.div`
  position: relative;
  width: 100%;
  margin-right: 0.5rem;

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
    z-index: 900;
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

export { SearchBox, InputBox };
