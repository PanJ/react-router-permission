import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router"; // react-router v4
import { ConnectedRouter } from "connected-react-router";
import { store, history } from "./configureStore";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const PrivateRoute = ({ authed, ...props }) =>
  authed ? <Route {...props} /> : <div>Not allowed</div>;

const Routes = ({ loggedIn }) => (
  <Switch>
    <Route exact path="/" component={App} />
    <PrivateRoute
      path="/profile"
      authed={loggedIn}
      render={() => <div>Authenticated!</div>}
    />
    <Route render={() => <div>Miss</div>} />
  </Switch>
);

const EnhancedRoutes = withRouter(
  connect(state => ({
    loggedIn: state.user.loggedIn
  }))(Routes)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {/* place ConnectedRouter under Provider */}
      <div>
        <EnhancedRoutes />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
