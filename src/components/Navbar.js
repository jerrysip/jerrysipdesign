import React, { Component } from "react";
import { MenuItems } from "../pages/objects/MenuItems";
import "../css/Navbar.css";

class Navbar extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="nav-wrap">
        <nav className="NavbarItems">
          <h1 className="navbar-logo">JERRYSIP</h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
