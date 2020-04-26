import React, { Component } from "react";

class Resources extends Component {
  state = {
    sectionHeading: "Our Resources",

    resourcesInfo: [
      {
        iconHeading: "HTML 5",
        iconText: `Built with the latest, HTML 5.`,
        iconClass: "fas fa-code fa-3x",
      },
      {
        iconHeading: "BOOTSTRAP 4",
        iconText: `Built with the latest, BOOTSTRAP 4.`,
        iconClass: "fas fa-bold fa-3x",
      },
      {
        iconHeading: "CSS 3",
        iconText: `Built with the latest, CSS 3.`,
        iconClass: "fab fa-css3 fa-3x",
      },
    ],
  };

  render() {
    return (
      <div id="resources" className="offset">
        <div className="fixed-background">
          <div className="row dark text-center">
            <div className="col-12">
              <h3 className="heading">{this.state.sectionHeading}</h3>
              <div className="heading-underline"></div>
            </div>

            {this.state.resourcesInfo.map(
              ({ iconHeading, iconText, iconClass }, index) => (
                <div className="col-md-4" key={index}>
                  <h3>{iconHeading}</h3>
                  <div className="feature">
                    <i className={iconClass}></i>
                  </div>
                  <p className="lead">{iconText}</p>
                </div>
              )
            )}
          </div>
          <div className="fixed-wrap">
            <div className="fixed"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;
