import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import icon from "../assets/magnifying-glass.svg";
import logo from "../assets/svglogoreal.svg";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="Headerclass">
        <img src={logo} className="logo" alt="" />
        <header>
          <Nav activeKey="/" className="nav justify-content-center">
            <Link to="/langekurser">
              <DropdownButton
                className="dropbtn"
                id="dropdown-basic-button"
                title="Langekurser"
                onMouseOver={this.onToggleOpen}
              >
                <Dropdown.Item>
                  <Link to="/priser">Priser og tilskud</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/linjefag">Linjefag</Link>
                </Dropdown.Item>
              </DropdownButton>
            </Link>

            <Link to="/Kortekurser">korte kurser</Link>
            <Link to="/Studieture">studieture</Link>
            <Link to="/Kursuscenter">kursuscenter</Link>
            <Link to="/Omskolen">om skolen</Link>
            <Link to="/Søg">
              <img src={icon} alt="" />
            </Link>
          </Nav>
        </header>
      </div>
    );
  }
}
