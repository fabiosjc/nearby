import styled from 'styled-components';

export const SearchParamsBox = styled.div`
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-direction: row;

  fieldset {
    margin: 10px;
  }

  label {
    display: flex;
    font-size: 12px;
  }

  input {
    line-height: 1.5;
    padding: 5px;
  }

  button {
    cursor: pointer;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid white;
    margin: 1.5rem 0;
    color: ${props => props.theme.background.default};
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 1rem;

    fieldset {
      margin: 0.5rem 1rem 0 0.5rem;
      width: 100%;
    }

    input {
      line-height: 2;
      width: 100%;
    }

    button {
      background: ${props => props.theme.background.default};
      color: ${props => props.theme.color.default};
      border: 1px solid ${props => props.theme.background.default};
      border-radius: 0;
      width: 100%;
      margin: 0.5rem 1rem 1rem 0.5rem;
      height: 2.5rem;
      font-size: large;
    }
  }
`;
