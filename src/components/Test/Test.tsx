import * as React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  color: ${props=>props.theme.colors.blue};
  border-radius: ${props=>props.theme.borderRadius};
  border: 1px solid ${props=>props.theme.colors.black};
`;

const Test = () => {
  return (
    <StyledDiv>TESTING ONE TWO</StyledDiv>
  );
};


export default Test;
