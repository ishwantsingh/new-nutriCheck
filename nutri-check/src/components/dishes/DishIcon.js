import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
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
        .container-all-1 {
          overflow: hidden;
        }
        .container-all {
          margin: 0 8rem;
          overflow-y: auto;
          height: 90vh;
          width: 75%;
        }
        .container-all::-webkit-scrollbar {
          width: 11.5px;
        }
        .container-all::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px grey;
          border-radius: 4px;
        }
        .container-all::-webkit-scrollbar-thumb {
          background: #9e9e9e;
          border-radius: 10px;
        }
        .img-1 {
          height: 17rem;
        }
        .img-2 {
          height: 13rem;
          padding-right: 2rem;
        }
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
    return (
      <StyledDiv>
        {console.log("boo3", props)}

        <div className="row dish-card">
          <div className="col s12 m6 dish-card-div">
            <div className="card">
              <div className="card-image">
                {console.log(props.dish.image)}
                <img src={props.dish.image} className="img-1" />
              </div>
              <div className="card-content">
                <p>{props.dish.name}</p>
              </div>
              <Popup
                trigger={<button> More Info!</button>}
                modal
                closeOnDocumentClick
                className="container-all-1"
              >
                <br />
                <div className="container-all">
                  {console.log(props.dish.link)}
                  <h5>{props.dish.name}</h5>
                  <img src={props.dish.image} className="img-2" />
                  <iframe
                    width="380"
                    height="180"
                    src={`${props.dish.link}`}
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                  <h5>Ingredients</h5>
                  {props.dish.ing.map(step => {
                    return <Ingre step={step} key={props.dish.id} />;
                  })}
                  <h5>Recipe</h5>
                  {Object.keys(props.dish.steps).map((step, i) => (
                    <Recipe
                      step={step}
                      key={i}
                      value={props.dish.steps[step]}
                      link={props.dish.link}
                    />
                  ))}
                  <h5>Suggested Drink: {props.dish.drink}</h5>
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
                  <br />
                  <br />
                </div>
              </Popup>
            </div>
          </div>
        </div>
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

{
  /* </Link> */
}
{
  /* <div>{props.dish.name}</div> */
}
{
  /* <div>{props.dish.steps}</div> */
}
{
  /* <div>{props.dish.ing}</div> */
}

{
  /* <p>{props.dish.name}</p> */
}
{
  /* {console.log(props.dish.steps)} */
}
{
  /* {props.dish.steps &&
                    props.dish.steps.map(step => {
                      //  console.log("boo2", dish.nut);
                      //   if (dish.nut === props.nutCheck) {
                      console.log(step, "boovoo");
                      return <Recipe step={step} key={props.dish.id} />;
                      //   } else {
                      //     return <h4>No Maches Found</h4>;
                      //   }
                    })}
                  } */
}
