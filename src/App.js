import React, { Component } from "react";
import Course from "./components/Course";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Features from "./components/Features";
import Resources from "./components/Resources";
import Clients from "./components/Clients";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="home">
          <Navigation></Navigation>
          <LandingPage></LandingPage>
        </div>

        <Course></Course>

        <Features></Features>

        <Resources></Resources>

        <Clients></Clients>

        <Contact></Contact>
      </div>
    );
  }
}

export default App;
