const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGNED_IN":
      return !state;
    case "SIGNED_OUT":
      return (state = false);
    default:
      return state;
  }
};

export default loggedReducer;
