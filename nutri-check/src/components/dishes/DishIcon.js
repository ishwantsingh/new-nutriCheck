import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledDiv = styled.div``;

const DishIcon = props => {
  console.log(props, "icon");
  return <StyledDiv></StyledDiv>;
};

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

export default DishIcon;
