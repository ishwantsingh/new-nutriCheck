import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import DishIcon from "./DishIcon";

const StyledListDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin 0 8%;
  text-align: center;
  h2 {
    margin-top: 0;
  }
  .dish-card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin 0 8%;
  }
  @media (max-width: 600px) {
    margin 0 auto;
    width: 90%;
    .dish-card-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin 0;
    }
  }
`;

const DishList = props => {
  //  console.log(props.dishes);

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
        <h2>Dishes</h2>
        {/* {func1(props.dishes)} */}
        <div className="dish-card-container">
          {props.dishes &&
            props.dishes.map(dish => {
              //  console.log("boo2", dish.nut);
              //   if (dish.nut === props.nutCheck) {
              return (
                <DishIcon dish={dish} nutCheck={props.nutCheck} key={dish.id} />
              );
              //   } else {
              //     return <h4>No Maches Found</h4>;
              //   }
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

const mapStateToProps = state => {
  // console.log(state.reducers);
  return {
    nutCheck: state.reducers
  };
};
export default connect(
  mapStateToProps,
  null
)(DishList);
