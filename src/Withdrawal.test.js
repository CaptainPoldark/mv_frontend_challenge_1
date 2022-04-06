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
  fireEvent.click(depositLink, { button: 0 });
  const depositInput = screen.getByTestId(/deposit-input/);
  fireEvent.change(depositInput, { target: { value: 10 } });
  const depositButton = screen.getByTestId(/deposit-button/);
  fireEvent.click(depositButton, { button: 0 });
  expect(screen.getByText("Account Total: $10")).toBeInTheDocument();
  const withdrawalLink = screen.getByTestId(/withdrawal-link/);
  fireEvent.click(withdrawalLink, { button: 0 });
  const withdrawalInput = screen.getByTestId(/withdrawal-input/);
  fireEvent.change(withdrawalInput, { target: { value: 2 } });
  const withdrawalButton = screen.getByTestId(/withdrawal-button/);
  fireEvent.click(withdrawalButton, { button: 0 });
  expect(screen.getByText("Account Total: $8")).toBeInTheDocument();
  console.log("Withdrawal form test passed");
});
