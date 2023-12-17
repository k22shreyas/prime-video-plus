import React from 'react';
import styled from 'styled-components';

const StyledComponent = styled.p`
  color: blue;
`;

const History = () => {
  return(
    <div class="card-body">
      <StyledComponent class="card-text">Lorem ipsum dolor sit amet, <b>History</b> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</StyledComponent>
    </div>
  );
}

export default History;