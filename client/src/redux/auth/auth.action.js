import axios from "axios";
import { Login_fail, Login_success } from "./auth.types";

let loginSuc = (payload) => {
  return {
    type: Login_success,
    payload,
  };
};

let loginFail = () => {
  return {
    type: Login_fail,
  };
};

export const getLogin = (data) => async (dispatch) => {
  try {
    let res = await axios.post(
      "https://paarsh-server.onrender.com/user/login",
      data
    );

    if (res.data.status) {
      dispatch(loginSuc(res.data));
      return true;
    }
  } catch (error) {
    dispatch(loginFail());
    return false;
  }
};
