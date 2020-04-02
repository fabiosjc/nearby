import styled from 'styled-components';

const HeaderBox = styled.header`
  color: ${props => props.theme.color.default};
  height: 8vh;

  #nav-header {
    background-color: ${props => props.theme.background.default};
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 0 23px;
    height: 8vh;
  }

  .items {
    white-space: nowrap;
    padding-right: 1rem;
  }

  .logo {
    padding-right: 0.5rem;
  }
`;

export { HeaderBox };
