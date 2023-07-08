import { getDefaultNormalizer } from "@testing-library/react";

const initialState = {
  value: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SETVALUE":
      console.log("reducer called");
      return { ...state, value: action.data };
    default:
      return state;
  }
};

export default reducer;
