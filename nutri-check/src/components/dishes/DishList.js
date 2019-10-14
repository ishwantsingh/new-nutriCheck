import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import DishIcon from "./DishIcon";

const StyledListDiv = styled.div``;

const DishList = props => {
  console.log(props.dishes);

  function func1(dishes) {
    dishes &&
      dishes.map(dish => {
        return <DishIcon dish={dish} key={dish.id} />;
      });
  }

  return (
    <StyledListDiv>
      <div>Dishes</div>
      {func1(props.dishes)}
    </StyledListDiv>
  );
};
// function mapStateToProps(state) {
//   return { dishes: state.dishes, auth: state.firebase.auth };
// }

export default DishList;
