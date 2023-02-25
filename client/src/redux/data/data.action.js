import axios from "axios";
import { Get_Applied, Get_Enquiry } from "./data.types";

export const getApp = (payload) => {
  return {
    type: Get_Applied,
    payload,
  };
};

export const getEnq = (payload) => {
  return {
    type: Get_Enquiry,
    payload,
  };
};

export const funForApplied = () => async (dispatch) => {
  let res = await axios.get("https://paarsh-server.onrender.com/apply");
  if (res.data.status) {
    dispatch(getApp(res.data.data));
    return true;
  } else {
    return false;
  }
};

export const funForEnquiry = () => async (dispatch) => {
  let res = await axios.get("https://paarsh-server.onrender.com/enquiry");
  if (res.data.status) {
    dispatch(getEnq(res.data.data));
    return true;
  } else {
    return false;
  }
};
