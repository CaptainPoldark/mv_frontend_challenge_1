export const deposit = (amount) => {
  return {
    type: "DEPOSIT",
    amount,
  };
};

export const withdrawal = (amount) => {
  return {
    type: "WITHDRAWAL",
    amount,
  };
};
