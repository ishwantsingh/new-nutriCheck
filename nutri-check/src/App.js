import React from "react";
import { Route } from "react-router-dom";
//import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import Options from "./components/Options";
import Headbar from "./components/layout/Headbar";
import DishList from "./components/dishes/DishList";
import Recipe from "./components/dishes/Recipe";

class App extends React.Component {
  render() {
    const { dishes, auth } = this.props;
    return (
      <div>
        <Headbar />
        <div>
          <Route exact path="/" component={Options} />
        </div>
        <div>
          <Route
            exact
            path="/"
            render={props => (
              <DishList {...props} dishes={dishes} auth={auth} />
            )}
          />
        </div>
        <div>
          <Route
            path="/recipe/:id"
            render={props => <Recipe {...props} dishes={dishes} />}
          />
        </div>
      </div>
    );
  }
}

//export default App;
// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     dishes: state.firestore.ordered.dishes
//   };
// };

// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([{ collection: "dishes" }])
// )(App);

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    dishes: state.firestore.ordered.dishes
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "dishes" }])
)(App);
