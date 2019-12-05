import React, { Component } from "react";
import "../Omskolen/omskolen.css";
import okicon from "../assets/ok-mark.png";
import picture1 from "../assets/adventuresport.jpg";
import picture2 from "../assets/dans.jpg";
import picture3 from "../assets/jagt og natur.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

class Omskolen extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="side">
        <div className="hero">
          <Slider {...settings}>
            <div>
              <img src={picture1} alt="" />
            </div>
            <div>
              <img src={picture2} alt="" />
            </div>
            <div>
              <img src={picture3} alt="" />
            </div>
          </Slider>
        </div>
        <div className="midcontent">
          <div className="text">
            <p className="title">VELKOMMEN TIL DEN LILLE HØJSKOLE</p>
            <p>
              Den lille Højskole er højskolen med linjefag i foto, sangskriver,
              musik, E-musik, film-
              <br />
              skuespil, dans, kunst, adventuresport og friluftsliv.
            </p>
            <p>
              Den lille Højskole tilbyder lange højskoleophold fra 13 og op til
              21 uger, og tager på
              <br />
              storbystudieture til Berlin og New York på alle ophold.
            </p>
            <p>
              Vi giver dig mulighed for at dyrke dine interesser, og opdage helt
              nye sider af dig selv
              <br />
              ennem fag du måske slet ikke vidste du brændte for!
              <br /> Hos os vil dit højskoleophold først og fremmest være drevet
              af din lyst til at dyrke det
              <br />
              du holder af, og vi lover dig høj faglighed i alle de fag vi
              tilbyder.
            </p>
            <p>
              Vi tager imod dig med fantastiske rammer såvel inde som ude, et
              meget bredt fag-
              <br />
              udbud og ikke mindst et ungt og dedikeret lærerteam, som glæder
              sig til at møde dig og
              <br />
              lære dig at kende.
            </p>
          </div>

          <div className="Hold">
            <p className="title">KOMMENDE ELEVHOLD</p>
            <p className="holdtext">
              Efterårs-semester 2019, 18. august til 14. december 2019, 17 uger
            </p>
            <p className="holdtext">
              Efterårs-semester 2019, 15 september til 14. december 2019, 13
              uger
            </p>
            <p className="holdtext">
              Forårs-semester 2020, 19 januar til 13. juni 2020, 21 uger
            </p>
            <p className="holdtext">
              Forårs-semester 2020, 23. februar til 13. juni 2020, 16 uger
            </p>
            <Link to="./tilmeld">
              <button className="holdbtn">
                <img src={okicon} alt="" />
                Tilmeld dig her
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Omskolen;
