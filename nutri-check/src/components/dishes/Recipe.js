import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Popup from "reactjs-popup";

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
`;
// function Recipe(props) {
//   return (
//     <StyledContainer>
//       {console.log(props)}
//       {/* <p>{props.dish.name}</p> */}
//     </StyledContainer>
//   );
// }

const Recipe = props => (
  //   <Popup trigger={<button> Trigger</button>} position="right center">
  <StyledContainer>
    {console.log(props.step)}
    <h5>{props.step}:</h5> <h6>{props.value}</h6>
    {/* <p>{props.dish.name}</p> */}
    {/* </Popup> */}
  </StyledContainer>
);

// const mapStateToProps = (state, ownProps) => {
//   console.log(state.reducers);
//   const id = ownProps.match.params.id;
//   const dishes = state.firestore.ordered.dishes;
//   const dish = dishes ? dishes[id] : null;
//   console.log(dish);
//   return {
//     dish: dish
//   };
// };
export default Recipe;

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([{ collection: "dishes" }])
// )(Recipe);
