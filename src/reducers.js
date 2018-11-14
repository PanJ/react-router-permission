import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const userInitialState = {
  loggedIn: false
};

export const login = () => ({
  type: "LOGIN"
});

export const logout = () => ({
  type: "LOGOUT"
});

const userReducer = (state = userInitialState, action = {}) => {
  console.log(state, action);
  switch (action.type) {
    case "LOGIN":
      return { loggedIn: true };
    case "LOGOUT":
      return { loggedIn: false };
    default:
      return state;
  }
};

export default history =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer
  });
