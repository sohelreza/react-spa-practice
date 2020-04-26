import React, { Component } from "react";

class Course extends Component {
  state = {
    sectionHeading: "Single Page React Application Course",
    sectionMessage: `Learn React by creating an advanced Bootstrap Responsive Website
    from scratch, with no steps skipped`,
    buttonText: "React Course",
  };

  render() {
    return (
      <div id="course" className="offset">
        <div className="col-12 narrow text-center">
          <h1>{this.state.sectionHeading}</h1>
          <p className="lead">{this.state.sectionMessage}</p>
          <a
            className="btn btn-secondary btn-md"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.buttonText}
          </a>
        </div>
      </div>
    );
  }
}

export default Course;
