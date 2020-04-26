import React, { Component } from "react";

class Navigation extends Component {
  companyLogoName = "nuno.png";

  navMenuItems = [
    { itemName: "Home", itemId: "#home" },
    { itemName: "Course", itemId: "#course" },
    { itemName: "Features", itemId: "#features" },
    { itemName: "Resources", itemId: "#resources" },
    { itemName: "Clients", itemId: "#clients" },
    { itemName: "Contact", itemId: "#contact" },
  ];

  constructor() {
    super();
    this.state = {
      menu: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }

  renderLogo = () => {
    let basePath = process.env.PUBLIC_URL + "/images/";
    let imagePath = basePath + this.companyLogoName;
    return imagePath;
  };

  render() {
    const show = this.state.menu ? "show" : "";

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#home">
          <img alt="Company Logo" src={this.renderLogo()} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          onClick={this.toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={"collapse navbar-collapse " + show}
          id="navbarResponsive"
        >
          <ul className="navbar-nav ml-auto">
            {this.navMenuItems.map(({ itemName, itemId }, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={itemId}>
                  {itemName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
