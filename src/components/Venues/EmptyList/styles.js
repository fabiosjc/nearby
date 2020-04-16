import styled from 'styled-components';

export const EmptyListContainer = styled.div`
  text-align: center;
  min-height: 50vh;

  .logo-icon {
    font-size: 48px;
    color: ${props => props.theme.background.default};
    margin-bottom: 0.7rem;
  }

  .text {
    font-size: 2rem;
    color: #2f373d;
    font-family: 'Helvetica Neue', sans-serif;
    letter-spacing: -1px;
    line-height: 1.5;
    text-align: center;
    padding: 0 1rem;
  }

  small {
    display: block;
    font-size: 1.3rem;
    color: gray;
  }
`;
