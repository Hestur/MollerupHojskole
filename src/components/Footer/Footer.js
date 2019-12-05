import React, { Component } from "react";
import icon from "../assets/facebook-logo-button.png";
import FormFooter from "./Form";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="Footer">
          <div className="footerinfo">
            <p className="title">Den lille højskole</p>
            <p>Mindevej 19</p>
            <p>8543 Hornslet</p>
            <p>Danmark</p>

            <p className="nummer">+45 77 34 77 12</p>
            <p>info@dlhoejskole.dk</p>
            <p>www.dlhoejskole.dk</p>
            <img src={icon} />
          </div>
          <div className="footerform">
            <FormFooter />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
