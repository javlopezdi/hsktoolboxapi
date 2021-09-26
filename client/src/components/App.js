import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "../history";
import { connect } from "react-redux";

import Home from "./Home";
import SignUp from "./SignUp";
import Header from "./Header";
import Progress from "./Progress";
import Practice from "./Practice";
import UserSettings from "./UserSettings";
import MultipleChoice from "./MultipleChoice";
import CompleteSentence from "./CompleteSentence";
import MatchingGame from "./MatchingGame";

const App = ({ isSignedIn }) => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact>
              {isSignedIn ? <Redirect to="/hsk1/progress" /> : <Home />}
            </Route>
            <Route path="/signup" exact component={SignUp} />
            <Route path="/usersettings" exact component={UserSettings} />
            <Route path="/:hsk/progress" exact component={Progress} />
            <Route path="/:hsk/practice/" exact component={Practice} />
            <Route
              path="/:hsk/practice/multiple"
              exact
              component={MultipleChoice}
            />
            <Route
              path="/:hsk/practice/complete"
              exact
              component={CompleteSentence}
            />
            <Route
              path="/:hsk/practice/matching"
              exact
              component={MatchingGame}
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(App);
