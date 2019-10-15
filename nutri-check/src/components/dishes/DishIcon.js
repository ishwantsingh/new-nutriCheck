import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import sampleFood from "../../images/sample-food.jpg";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  padding: 10px;
`;

export default function DishIcon(props) {
  return (
    <StyledDiv>
      {/* {console.log("boo3", props)} */}

      <div class="row">
        <div class="col s12 m6">
          <div class="card">
            <div class="card-image">
              <img src={sampleFood} />
            </div>
            <div class="card-content">
              <p>{props.dish.name}</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div>{props.dish.name}</div> */}
      {/* <div>{props.dish.steps}</div> */}
      {/* <div>{props.dish.ing}</div> */}
    </StyledDiv>
  );
}

// const mapDispatchToProps = dispatch => {
//     return {
//       upvoteAction: postId => dispatch(upvoteAction(postId)),
//       downvoteAction: postId => dispatch(downvoteAction(postId))
//     };
//   };

//   export default connect(
//     null,
//     mapDispatchToProps
//   )(PostList);
