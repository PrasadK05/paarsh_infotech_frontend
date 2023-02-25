import { Login_fail, Login_success } from "./auth.types";

export const authInitalState = {
  token: "",
  refreshToken: "",
  isAuth: false,
};

export const AuthReducer = (state = authInitalState, action) => {
  switch (action.type) {
    case Login_success: {
      return {
        ...state,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
        isAuth: true,
      };
    }

    case Login_fail: {
      return state;
    }

    default: {
      return state;
    }
  }
};
