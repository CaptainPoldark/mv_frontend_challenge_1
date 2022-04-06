const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return state + action.amount;
    case "WITHDRAWAL":
      return state - action.amount;
    default:
      return state;
  }
};

export default counterReducer;
