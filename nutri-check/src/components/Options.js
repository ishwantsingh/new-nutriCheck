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
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  margin 5rem 10%;
  #reset-but {
    opacity: 0;
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
    // console.log("boo", e.target.id);
    // console.log(`${e.target.id}`, this.state[e.target.id]);
    // console.log(document.writeln(this.state.fat));
    this.state[e.target.id] === "Low"
      ? this.setState({
          [e.target.id]: "High"
        })
      : this.setState({
          [e.target.id]: "Low"
        });

    // this.setState({ [e.target.id]: "high" });

    // console.log(`${e.target.id}`, this.state[e.target.id]);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getInfo(
      this.state.fat,
      this.state.fiber,
      this.state.protein,
      this.state.carbohydrate,
      this.state.mineral,
      this.state.calorie
    );
    this.setState({
      cal: "Low",
      carb: "Low",
      fat: "Low",
      fiber: "Low",
      mineral: "Low",
      protein: "Low"
    });
    console.log("booooo", this.state);
  };

  reset = () => {
    //console.log(document.getElementById("reset-but"));
    document.getElementById("reset-but").click();
  };

  render() {
    return (
      <StyledContainer>
        {/* <Form onSubmit={this.handleSubmit}>
            <div className="form-section">
              <div className="input-sect">
                <h5>Select Starting Point</h5>
                <div className="input-field">
                  <label htmlFor="type">
                    <input
                      ref={this.startRef}
                      list="types"
                      name="myType"
                      type="text"
                      id="start"
                      placeholder="Select Station:"
                      onChange={this.handleChange}
                    />
                  </label>
                  <Dropdown />
                </div>
              </div>
              <div className="input-sect">
                <h5>Select Destination</h5>
                <div className="input-field">
                  <label htmlFor="type">
                    <input
                      ref={this.endRef}
                      list="types"
                      name="myType"
                      type="text"
                      id="end"
                      placeholder="Select Station:"
                    />
                  </label>
                  <Dropdown />
                </div>
              </div>
            </div>
      
            <div className="input-field">
              <button className="waves-effect btn">Show Info</button>
            </div>
          </Form> */}
        <Form onSubmit={this.handleSubmit}>
          <div>
            <Switch id={"cal"} name={"Calorie"} func={this.handleChange} />
          </div>
          <div>
            <Switch
              id={"carb"}
              name={"Carbohydrate"}
              func={this.handleChange}
            />
          </div>
          <div>
            <Switch id={"fat"} name={"Fat"} func={this.handleChange} />
          </div>
          <div>
            <Switch id={"fiber"} name={"Fiber"} func={this.handleChange} />
          </div>
          <div>
            <Switch id={"mineral"} name={"Mineral"} func={this.handleChange} />
          </div>

          <div>
            <Switch id={"protein"} name={"Protein"} func={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="waves-effect btn" onClick={this.reset}>
              Show Info
            </button>
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
