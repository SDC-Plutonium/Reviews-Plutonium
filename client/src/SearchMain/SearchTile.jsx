import React from 'react';
import styled from 'styled-components';
import {useCurrentProductUpdate} from '../context.jsx'

function SearchTile(props) {
  const setCurrentProduct = useCurrentProductUpdate();

  const handleClick = () => {
    setCurrentProduct(props.product.id);
    props.toggleSearch();
  };

  return (
    <StyledDiv onClick={handleClick}>
      {props.product.name}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: small;
  font-weight: medium;
  width: 90%;
  padding: 2%;
  margin: 1%;
  border: .5px solid #d9d9d9;
  &:hover {
    opacity: 60%;
    cursor: pointer;
  }
`;

const StyledImg = styled.img`
  max-height: 48px;
  scale: auto;
  border: 1px solid #d9d9d9;
  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
`;

export default SearchTile;