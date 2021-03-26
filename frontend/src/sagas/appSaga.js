import { takeEvery, call, put, delay } from "redux-saga/effects";
import * as API from "services/api";
import {
  GET_STAR_WARS_R,
  GET_STAR_WARS_S,
  GET_STAR_WARS_F,
  LOGIN_R,
  LOGIN_S,
  LOGIN_F,
} from "consts/actionTypes";
import { history } from "services/config";

export function* getStar(action) {
  try {
    const { id } = action.payload;
    const people = yield call(
      API.getData,
      `https://swapi.dev/api/people/${id}`
    );
    yield delay(5000);
    yield put({
      type: GET_STAR_WARS_S,
      payload: {
        people,
      },
    });
  } catch (error) {
    console.log(error); // eslint-disable-line
    yield put({
      type: GET_STAR_WARS_F,
    });
  }
}

export function* login(action) {
  try {
    const { loginData: data } = action.payload;
    const token = yield call(
      API.loginData,
      `http://localhost:5000/api/auth`,
      data
    );
    const user = yield call(API.getData, `http://localhost:5000/api/auth`);
    console.log(token);

    yield put({
      type: LOGIN_S,
      payload: { user },
    });

    history.push("/");
  } catch (error) {
    yield put({
      type: LOGIN_F,
      payload: { error: error.response.data.errors[0].msg },
    });
  }
}

export const appSagas = [
  takeEvery(GET_STAR_WARS_R, getStar),
  takeEvery(LOGIN_R, login),
];
