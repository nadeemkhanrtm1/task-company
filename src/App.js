import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Content/>
    </React.Fragment>
  );
}

export default App;
