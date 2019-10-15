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
  function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
      return false;
    }

    for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];

      // If values of same property are not equal,
      // objects are not equivalent
      if (a[propName] !== b[propName]) {
        return false;
      }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
  }
  console.log(props.dish.nut, props.nutCheck);
  if (isEquivalent(props.dish.nut, props.nutCheck)) {
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
  } else return <div></div>;
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
