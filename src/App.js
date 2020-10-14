import React from "react";
import "./App.css";
import Header from "./component/Header";
import TinderCards from "./component/TinderCards";
import SwipeButton from "./component/SwipeButton";

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButton />
    </div>
  );
}

export default App;
