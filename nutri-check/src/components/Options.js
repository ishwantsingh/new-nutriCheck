import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Switch from "./Switch";
import getInfo from "../state/actions/actionCreators";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  margin: 5rem 10%;
  #reset-but {
    opacity: 0;
  }
  @media (max-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin: 5rem auto;
  }
`;

class Options extends React.Component {
  state = {
    cal: "Low",
    carb: "Low",
    fat: "Low",
    fiber: "Low",
    mineral: "Low",
    protein: "Low"
  };
  handleChange = e => {
    this.state[e.target.id] === "Low"
      ? this.setState({
          [e.target.id]: "High"
        })
      : this.setState({
          [e.target.id]: "Low"
        });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("b", this.state);
    this.props.getInfo(
      this.state.cal,
      this.state.carb,
      this.state.fat,
      this.state.fiber,
      this.state.mineral,
      this.state.protein
    );
  };

  render() {
    return (
      <StyledContainer>
        <Form onSubmit={this.handleSubmit}>
          <div>
            <Switch id={"cal"} name={"Cal"} func={this.handleChange} />
          </div>
          <div>
            <Switch id={"carb"} name={"Carb"} func={this.handleChange} />
          </div>{" "}
          <div>
            <Switch id={"fat"} name={"Fat"} func={this.handleChange} />
          </div>{" "}
          <div>
            <Switch id={"fiber"} name={"Fiber"} func={this.handleChange} />
          </div>{" "}
          <div>
            <Switch id={"mineral"} name={"Mineral"} func={this.handleChange} />
          </div>{" "}
          <div>
            <Switch id={"protein"} name={"Protein"} func={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="waves-effect btn">Show Info</button>
            <br />
            <button type="reset" id="reset-but" />
          </div>
        </Form>
      </StyledContainer>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInfo: (cal, carb, fat, fiber, mineral, protein) =>
      dispatch(getInfo(cal, carb, fat, fiber, mineral, protein))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Options);
