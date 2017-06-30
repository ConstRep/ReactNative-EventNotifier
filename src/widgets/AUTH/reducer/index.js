import * as types from "../constant";

const initialState = {
  userExists: null,
  user: null,
  clientError: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.AUTH:
      return {...state, user: action.payload.user, userExists: action.payload.userExists, clientError: action.payload.clientError};
    case types.USER_EXISTS:
      return {...state, user: action.payload.user, userExists: action.payload.userExists, clientError: action.payload.clientError};
    default:
      return state;
  }
}
