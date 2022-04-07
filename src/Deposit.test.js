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

test("test deposit form", () => {
  render(
    <Provider store={store}>
      <App />)
    </Provider>
  );
  const depositLink = screen.getByTestId(/deposit-link/);
  fireEvent.click(depositLink, { button: 0 });

  const transactionInput = screen.getByTestId(/transaction-input/);
  const transactionButton = screen.getByTestId(/transaction-button/);
  
  fireEvent.change(transactionInput, { target: { value: 5 } });
  fireEvent.click(transactionButton, { button: 0 });
  expect(screen.getByText("Account Total: $5")).toBeInTheDocument();

  console.log("Deposit form test passed");
});
