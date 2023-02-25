import { Get_Applied, Get_Enquiry } from "./data.types";

export const authInitalState = {
  All_data: [],
};

export const dataReducer = (state = authInitalState, action) => {
  switch (action.type) {
    case Get_Applied: {
      return {
        All_data: action.payload,
      };
    }

    case Get_Enquiry: {
      return {
        All_data: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
