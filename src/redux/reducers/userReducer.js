const initialState = {
  email: "jefersonsales1@gmail.com"
};

export default (state = initialState, action) => {
  if (action.type === "SET_EMAIL") {
    return { ...state, action: action.payload.email };
  }
  return state;
};
