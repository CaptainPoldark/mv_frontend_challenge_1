import { render, screen, fireEvent, userEv } from "@testing-library/react";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

test("renders welcome message", () => {
  render(
    <Provider store={store}>
      <App />)
    </Provider>
  );
  const linkElement = screen.getByText(/Welcome to the bank/i);
  expect(linkElement).toBeInTheDocument();
});

test("test withdrawal form", () => {
  render(
    <Provider store={store}>
      <App />)
    </Provider>
  );
  const depositLink = screen.getByTestId(/deposit-link/);
  const withdrawalLink = screen.getByTestId(/withdrawal-link/);

  fireEvent.click(depositLink, { button: 0 });
  const transactionInput0 = screen.getByTestId(/transaction-input/);
  const transactionButton0 = screen.getByTestId(/transaction-button/);
  
  fireEvent.change(transactionInput0, { target: { value: 10 } });
  fireEvent.click(transactionButton0, { button: 0 });
  expect(screen.getByText("Account Total: $10")).toBeInTheDocument();

  fireEvent.click(withdrawalLink, { button: 0 });
  const transactionInput1 = screen.getByTestId(/transaction-input/);
  const transactionButton1 = screen.getByTestId(/transaction-button/);
  fireEvent.change(transactionInput1, { target: { value: 2 } });
  fireEvent.click(transactionButton1, { button: 0 });
  expect(screen.getByText("Account Total: $8")).toBeInTheDocument();

  console.log("Withdrawal form test passed");
});
