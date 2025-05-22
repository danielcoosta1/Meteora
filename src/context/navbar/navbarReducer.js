export const navbarReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALTURA":
      return {
        ...state,
        altura: action.payload,
      };
    default:
      return state;
  }
};
