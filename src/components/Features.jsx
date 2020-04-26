import React, { Component } from "react";

class Features extends Component {
  state = {
    sectionHeading: "Features",

    featuresInfo: [
      {
        iconHeading: "Custom Animation",
        iconText: `Animate.css and Waypoints.js allow for smooth animation
        scrolling down the site`,
        iconClass: "fas fa-play-circle fa-4x",
        dataTransform: "shrink-3 up-5",
      },
      {
        iconHeading: "Content Slider",
        iconText: `Owl.Carousel.js makes navigation content sliders seamless
        with it's content carousel navigation.`,
        iconClass: "fas fa-sliders-h fa-4x",
        dataTransform: "shrink-4.5 up-4.5",
      },
      {
        iconHeading: "Contact Form",
        iconText: `The Bootstrap HTML form will send directly to your email
        address using PHPMailer.php.`,
        iconClass: "fab fa-wpforms fa-4x",
        dataTransform: "shrink-4 up-5",
      },
    ],
  };

  render() {
    return (
      <div id="features" className="offset">
        <div className="jumbotron">
          <div className="narrow text-center">
            <div className="col-12">
              <h3 className="heading">{this.state.sectionHeading}</h3>
              <div className="heading-underline"></div>
            </div>

            <div className="row text-center">
              {this.state.featuresInfo.map(
                (
                  { iconHeading, iconText, iconClass, dataTransform },
                  index
                ) => (
                  <div className="col-md-4" key={index}>
                    <div className="feature">
                      <i
                        className={iconClass}
                        data-fa-transform={dataTransform}
                      ></i>
                      <h3>{iconHeading}</h3>
                      <p>{iconText}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
