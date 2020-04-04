import styled from 'styled-components';

const VenuesContainer = styled.section`
  min-height: 52vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const LoadingContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  overflow: hidden;
  left: 0;
  top: 10vh;
  width: 100%;
  background: ${props => (props.isLoading ? '#eee' : 'transparent')};
  z-index: ${props => (props.isLoading ? 1 : -1)};
  height: 52vh;
  top: 48vh;
`;

const ListContainer = styled.ul`
  padding: 0.5rem;
  width: 100%;

  .category {
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.8rem;
    color: purple;
  }

  img.category-img {
    background: ${props => props.theme.background.default};
    margin: 10px;
    border-radius: 50%;
    box-shadow: 1px 3px 3px 3px #ddd;
    width: 38px;
    height: 38px;
  }
`;

const ListItem = styled.li`
  margin: 1rem;
  background: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
`;

export { VenuesContainer, LoadingContainer, ListContainer, ListItem };
