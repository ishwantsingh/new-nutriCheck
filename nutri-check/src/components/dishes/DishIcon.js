import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import sampleFood from "../../images/sample-food.jpg";

const StyledDiv = styled.div`
  display: flex;
  width: 30%;
  height: 100%;

  margin: 0 auto;
  padding: 10px;
  .dish-card {
    .dish-card-div {
      width: 100%;
      height: 20rem;
      .card {
        width: 100%;
        height: 20rem;
      }
    }
  }
`;

export default function DishIcon(props) {
  return (
    <StyledDiv>
      {/* {console.log("boo3", props)} */}

      <div className="row dish-card">
        <div className="col s12 m6 dish-card-div">
          <div className="card">
            <div className="card-image">
              <img src={sampleFood} />
            </div>
            <div className="card-content">
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
