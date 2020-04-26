import React, { Component } from "react";

class Contact extends Component {
  state = {
    companyLogoName: "nuno.png",
    companyMessage: `At our core is a collection of design and development solutions
    that represent everything your business needs to compete in the
    modern marketplace.`,
    heading: "Contact Info",
    companyPhoneNo: "(+880) 1557888333",
    companyEmailAddress: "email@email.com",
    copyrightText: "React.",
    companyOtherLinks: [
      {
        companyLink: "https://www.facebook.com",
        className: "fab fa-facebook-square",
      },
      {
        companyLink: "https://www.twitter.com",
        className: "fab fa-twitter-square",
      },
      {
        companyLink: "https://www.instagram.com",
        className: "fab fa-instagram",
      },
    ],
  };

  render() {
    return (
      <div id="contact" className="offset">
        <footer>
          <div className="row justify-content-center">
            <div className="col-md-5 text-center">
              <img src={this.renderLogo()} alt="Company Logo" />
              <p>{this.state.companyMessage}</p>
              <strong>{this.state.heading}</strong>
              <p>
                {this.state.companyPhoneNo}
                <br />
                {this.state.companyEmailAddress}
              </p>
              {this.state.companyOtherLinks.map(
                ({ companyLink, className }, index) => (
                  <a
                    href={companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                  >
                    <i className={className}></i>
                  </a>
                )
              )}
            </div>
            <hr className="socket" />
            &copy; {this.state.copyrightText}
          </div>
        </footer>
      </div>
    );
  }

  renderLogo = () => {
    let basePath = process.env.PUBLIC_URL + "/images/";
    let imagePath = basePath + this.state.companyLogoName;
    return imagePath;
  };
}

export default Contact;
