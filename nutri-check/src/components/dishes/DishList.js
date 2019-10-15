import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import DishIcon from "./DishIcon";

const StyledListDiv = styled.div`
  display: flex;
  flex-direction: column;
  .dish-card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const DishList = props => {
  console.log(props.dishes);

  //   function func1(dishes) {
  //     console.log("boo");
  //     dishes &&
  //       dishes.map(dish => {
  //         console.log("boo2", dish.id);
  //         return <DishIcon dish={dish} key={dish.id} />;
  //       });
  //   }

  if (props.dishes) {
    return (
      <StyledListDiv>
        <div>Dishes</div>
        {/* {func1(props.dishes)} */}
        <div className="dish-card-container">
          {props.dishes &&
            props.dishes.map(dish => {
              console.log("boo2", dish.id);
              return <DishIcon dish={dish} key={dish.id} />;
            })}
        </div>
      </StyledListDiv>
    );
  } else {
    return (
      <StyledListDiv className="container center">
        <div className="progress">
          <div className="indeterminate" />
        </div>
      </StyledListDiv>
    );
  }
};

//   return (
//     <StyledListDiv>
//       <div>Dishes</div>
//       {func1(props.dishes)}
//     </StyledListDiv>
//   );
// };
// function mapStateToProps(state) {
//   return { dishes: state.dishes, auth: state.firebase.auth };
// }

export default DishList;
