import styled from 'styled-components';

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  width: 100%;

  .search {
    position: absolute;
    top: 8px;
    left: 150px;
    width: calc(100% - 30rem);
  }

  .advanced-search {
    position: absolute;
    top: 8px;
    right: 0;
    display: flex;
  }

  label {
    display: none;
  }

  input#query {
    height: 50px;
    background: purple;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    width: 16rem;
    font-size: 16px;
    margin: 0;
    padding: 0.5rem;

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

  button.search-btn {
    height: 48px;
    width: 48px;
    color: #e7e7e7;
    border-radius: 50%;
    font-size: 18px;
    border: none;
    background: inherit;
    margin-right: 4px;
  }

  button.search-btn:hover {
    color: #fff;
  }

  @media (max-width: 700px) {
    background: ${props => props.theme.background.default};

    .search {
      width: calc(100% - 167px);
    }

    .advanced-search {
      display: block;
      position: initial;
      width: 100%;
      margin: 0;
      padding: 1rem;
      color: #000 !important;
    }

    input#query {
      height: 48px;
      border-bottom: 1px solid white;
      color: #fff;
      width: 100%;
      border: 1px solid #d9d9d9;
      font-size: 1rem;
      border: none;
      border-bottom: 1px solid #d9d9d9;

      ::placeholder {
        color: white;
        opacity: 1; /* Firefox */
      }

      ::-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: white;
      }

      ::-ms-input-placeholder {
        /* Microsoft Edge */
        color: white;
      }
    }

    button.search-btn {
      height: 48px;
      font-size: 18px;
      background: purple;
      margin-top: 1rem;
      height: 48px;
      width: 100%;
      color: #e7e7e7;
      border-radius: 0;
      font-size: 18px;
      border: 1px solid white;
    }
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
