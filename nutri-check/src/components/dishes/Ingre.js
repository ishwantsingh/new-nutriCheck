import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
`;

const Ingre = props => (
  //   <Popup trigger={<button> Trigger</button>} position="right center">
  <StyledContainer>
    {console.log(props.step)}
    <h6>{`${props.step}      `} </h6>
  </StyledContainer>
);

export default Ingre;
