import {
  APP_LOADING,
  GET_STAR_WARS_R,
  GET_STAR_WARS_S,
  GET_STAR_WARS_F,
  LOGIN_R,
  LOGIN_S,
  LOGIN_F,
} from "consts/actionTypes";
import initialState from "./initialState";

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_STAR_WARS_R:
      return {
        ...state,
        apiLoading: true,
      };

    case GET_STAR_WARS_F:
      return {
        ...state,
        apiLoading: false,
      };

    case GET_STAR_WARS_S:
      return {
        ...state,
        apiLoading: false,
        people: action.payload.people,
      };

    case LOGIN_R:
      return {
        ...state,
        loginLoading: true,
        isError: false,
        isAuthenticated: false,
      };

    case LOGIN_S:
      return {
        ...state,
        loginLoading: false,
        user: action.payload.user,
        isError: false,
        isAuthenticated: true,
      };

    case LOGIN_F:
      return {
        ...state,
        loginLoading: false,
        error: action.payload.error,
        isError: true,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default appReducer;
