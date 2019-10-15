import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import sampleFood from "../../images/sample-food.jpg";
import Popup from "reactjs-popup";
import Recipe from "./Recipe";
import Ingre from "./Ingre";

const StyledDiv = styled.div`
  display: flex;
  width: 30%;
  height: 100%;

  margin: 0 auto;
  padding: 10px;
  .dish-card {
    .dish-card-div {
      width: 100%;
      height: 30rem;
      .card {
        width: 100%;
        height: 25rem;
        a {
          margin: 0 10px;
        }
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
  // console.log(props.dish.nut, props.nutCheck);
  if (isEquivalent(props.dish.nut, props.nutCheck)) {
    var link = props.dish.link;
    return (
      <StyledDiv>
        {/* {console.log("boo3", props)} */}

        {/* <Link
          to={"/recipe/" + props.dish.id}
          key={props.dish.id}
          className="container"
        > */}
        <div className="row dish-card">
          <div className="col s12 m6 dish-card-div">
            <div className="card">
              <div className="card-image">
                <img src={sampleFood} />
              </div>
              <div className="card-content">
                <p>{props.dish.name}</p>
              </div>
              <Popup
                trigger={<button> More Info!</button>}
                // position="right center"
                modal
                closeOnDocumentClick
              >
                <div>
                  {console.log(link)}
                  <h4>{props.dish.name}</h4>
                  <iframe
                    width="620"
                    height="200"
                    src={`${link}?autoplay=1`}
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                  {/* <p>{props.dish.name}</p> */}
                  {/* {console.log(props.dish.steps)} */}
                  {/* {props.dish.steps &&
                    props.dish.steps.map(step => {
                      //  console.log("boo2", dish.nut);
                      //   if (dish.nut === props.nutCheck) {
                      console.log(step, "boovoo");
                      return <Recipe step={step} key={props.dish.id} />;
                      //   } else {
                      //     return <h4>No Maches Found</h4>;
                      //   }
                    })}
                  } */}
                  <h5>Ingredients</h5>
                  {props.dish.ing.map(step => {
                    //console.log("boo2", dish.nut);

                    // console.log(step, "boovoo");
                    return <Ingre step={step} key={props.dish.id} />;
                  })}
                  ;<h5>Recipe</h5>
                  {Object.keys(props.dish.steps).map((step, i) => (
                    <Recipe
                      step={step}
                      key={i}
                      value={props.dish.steps[step]}
                      link={props.dish.link}
                    />
                  ))}
                  <div>
                    <a href="https://www.swiggy.com/" target="_blank">
                      {" "}
                      <button className="waves-effect btn">
                        Get this on Swiggy!
                      </button>
                    </a>
                    <a href="https://www.zomato.com/" target="_blank">
                      <button className="waves-effect btn">
                        Get this on Zomato!
                      </button>
                    </a>
                    <a href="https://www.ubereats.com/" target="_blank">
                      <button className="waves-effect btn">
                        Get this on UberEats!
                      </button>
                    </a>
                  </div>
                </div>
              </Popup>
            </div>
          </div>
        </div>
        {/* </Link> */}
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
