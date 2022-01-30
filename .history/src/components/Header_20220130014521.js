import React from "react";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      
    </>
  );
};


const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

    </Switch>
  );
};

export default App;
