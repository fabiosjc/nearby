import styled from 'styled-components';

const HeaderBox = styled.header`
  color: ${props => props.theme.color.default};
  #nav-header {
    background-color: ${props => props.theme.background.default};
    display: flex;
    justify-content: left;
    align-items: center;
    min-height: 8vh;
    padding: 0 23px;
  }

  .items {
    width: 200px;
  }
`;

export { HeaderBox };
