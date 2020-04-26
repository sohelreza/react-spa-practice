import React, { Component } from "react";

class Clients extends Component {
  state = {
    sectionHeading: "Clients",
    sectionMessage: "Want to learn more about developing React Project?",
    buttonText: "React Course",
  };

  clientInfo = [
    {
      name: "Eric",
      profession: "Small Business Owner",
      imageName: "client1.png",
      comment: `I see this company support as more of a partner to my
      company than a resource. I can pick ip the phone and talk to
      anyone at any time and the way that they interact with us as
      a business makes it really simple.`,
    },
    {
      name: "Rachel",
      profession: "Professional Photographer",
      imageName: "client2.png",
      comment: `I see this company support as more of a partner to my
      company than a resource. I can pick ip the phone and talk to
      anyone at any time and the way that they interact with us as
      a business makes it really easy.`,
    },
    {
      name: "Michael",
      profession: "Supershop Owner",
      imageName: "client1.png",
      comment: `I see this company support as more of a partner to my
      company than a resource. I can pick ip the phone and talk to
      anyone at any time and the way that they interact with us as
      a business makes it really easier.`,
    },
  ];

  render() {
    return (
      <div id="clients" className="offset">
        <div className="jumbotron">
          <div className="col-12 text-center">
            <h3 className="heading">{this.state.sectionHeading}</h3>
            <div className="heading-underline"></div>
          </div>
          <div className="row justify-content-center">
            {this.clientInfo.map(
              ({ name, profession, imageName, comment }, index) => (
                <div className="col-md-6 clients" key={index}>
                  <div className="row">
                    <div className="col-md-4">
                      <img src={this.imageHandler(imageName)} alt="Client" />
                    </div>
                    <div className="col-md-8">
                      <blockquote>
                        <i className="fas fa-quote-left"></i>
                        {comment}
                        <hr className="clients-hr" />
                        <cite>
                          &#8212; {name}, {profession}
                        </cite>
                      </blockquote>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="col-12 narrow text-center">
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

  imageHandler(imageName) {
    let basePath = process.env.PUBLIC_URL + "/images/";
    let imagePath = basePath + imageName;
    return imagePath;
  }
}

export default Clients;
