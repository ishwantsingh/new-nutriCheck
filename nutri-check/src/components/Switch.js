import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  border: 2px solid #009688;
  border-radius: 10px;
  padding: 5px 20px;
  margin: 0 auto;
  width: 100%;
`;
function Switch(props) {
  return (
    <StyledContainer className="switch">
      <p>{props.name}</p>
      <label>
        Low
        <input type="checkbox" id={props.id} onChange={props.func} />
        {/* {console.log(props)} */}
        <span className="lever"></span>
        High
      </label>
    </StyledContainer>
  );
}

export default Switch;
