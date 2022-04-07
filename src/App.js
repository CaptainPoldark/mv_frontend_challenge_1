import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import BankCard from "./components/BankCard/BankCard";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/deposit"
            element={<BankCard transactionType={"Deposit"} />}
          />
          <Route
            path="/withdraw"
            element={<BankCard transactionType={"Withdrawal"} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
