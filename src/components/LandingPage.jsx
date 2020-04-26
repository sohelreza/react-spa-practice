import React, { Component } from "react";

class LandingPage extends Component {
  state = {
    welcomeText: "Welcome to React",
    aboutText: "A simple SPA",
    buttonText: "Check It Out",
  };

  render() {
    return (
      <React.Fragment>
        <div className="landing">
          <div className="home-wrap">
            <div className="home-inner"></div>
          </div>
        </div>

        <div className="caption text-center">
          <h1>{this.state.welcomeText}</h1>
          <h3>{this.state.aboutText}</h3>
          <a className="btn btn-outline-light btn-lg" href="#course">
            {this.state.buttonText}
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default LandingPage;
