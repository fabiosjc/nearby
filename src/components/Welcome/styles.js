import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  text-align: center;

  .logo-icon {
    font-size: 48px;
    color: ${props => props.theme.background.default};
    margin-bottom: 0.7rem;
  }

  .text {
    font-size: 1.5rem;
    color: #2f373d;
    font-family: 'Helvetica Neue', sans-serif;
    letter-spacing: -1px;
    line-height: 1;
    text-align: center;
  }

  @media (max-width: 700px) {
    .text {
      padding: 0 3rem;
    }
  }
`;
