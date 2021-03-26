import { APP_LOADING, GET_STAR_WARS_R, LOGIN_R } from "consts/actionTypes";

export const appLoading = () => ({
  type: APP_LOADING,
});

export const getStarWars = (id) => ({
  type: GET_STAR_WARS_R,
  payload: {
    id,
  },
});

export const login = (loginData) => ({
  type: LOGIN_R,
  payload: {
    loginData,
  },
});
