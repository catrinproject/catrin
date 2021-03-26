import axios from "axios";

export const api = axios.create({
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

const setHeader = (token) => {
  localStorage.setItem("token", token);
  api.defaults.headers["x-auth-token"] = token;
};

export const getData = (url) => api.get(url).then((response) => response.data);

export const deleteData = (url) =>
  api.delete(url).then((response) => response.data);

export const postData = (url, body) =>
  api.post(url, body).then((response) => response.data);

export const patchData = (url, body) =>
  api.patch(url, body).then((response) => response.data);

export const loginData = (url, body) =>
  api.post(url, body).then((response) => {
    setHeader(response.data);
    return response.data;
  });
