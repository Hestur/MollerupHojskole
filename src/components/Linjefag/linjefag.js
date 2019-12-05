import React, { Component, useState } from "react";
import picture1 from "../assets/foto.jpg";
import picture2 from "../assets/sangskriver.jpg";
import picture3 from "../assets/e-musik.jpg";
import picture4 from "../assets/dans.jpg";
import picture5 from "../assets/adventuresport.jpg";
import "./linjefag.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Linjefag extends Component {
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
            <div>
              <img src={picture4} alt="" />
            </div>
            <div>
              <img src={picture5} alt="" />
            </div>
          </Slider>
        </div>
        <div className="midcontent">
          <p className="title">LINJEFAG</p>

          <p>
            I dine første dage på Den lille højskole bruger vi en del tid på at
            introducere alle vores lin-
            <br />
            jefag og valgfag således at du kan få valgt det skema der passer
            præcis til dig. Via din
            <br /> tilmelding har du allerede givet os en pejling på, hvilke
            linjefag du ønsker at følge, men du
            <br /> vælger altså først definitivt dine fag i løbet af de første
            dage på skolen.
          </p>

          <div className="line"></div>

          <div className="grid1x5">
            <div className="item">
              <p className="itemtitle">FOTO</p>
              <div className="flexdiv">
                <img src={picture1} alt="" />

                <p className="textright">
                  Fotografi er så meget mere, end at tage skarpe billeder.
                  <br /> Det er en helt anden anden måde at se
                  <br /> verden på.
                  <br />
                  <a href={"Fagvis"} className="læsmere">
                    Læs mere...
                  </a>
                </p>
              </div>
            </div>

            <div className="item">
              <p className="itemtitle">SANGSKRIVER</p>
              <div className="flexdiv">
                <img src={picture2} alt="" />
                <p className="textright">
                  Musiker/sangskriver-linjen henvender sig
                  <br /> til dig som vil være en bedre musiker,
                  <br /> sangskriver, sanger etc.
                  <br />
                  <a href={"Fagvis"} className="læsmere">
                    Læs mere...
                  </a>
                </p>
              </div>
            </div>

            <div className="item">
              <p className="itemtitle">E-MUSIK</p>
              <div className="flexdiv">
                <img src={picture3} alt="" />
                <p className="textright">
                  Elektronisk musik på Den lille højskole
                  <br /> giver dig mulighed for at udvikle dine
                  <br /> evner indenfor musikproduktion.
                  <br />
                  <a href={"Fagvis"} className="læsmere">
                    Læs mere...
                  </a>
                </p>
              </div>
            </div>
            <div className="item">
              <p className="itemtitle">DANS</p>
              <div className="flexdiv">
                <img src={picture4} alt="" />
                <p className="textright">
                  På Dans arbejdes med forskellige
                  <br /> dansestilarter, og du vil blive udfordret
                  <br /> fysisk såvel som kreativt
                  <br />
                  <a href={"Fagvis"} className="læsmere">
                    Læs mere...
                  </a>
                </p>
              </div>
            </div>
            <div className="item">
              <p className="itemtitle">ADVENTURESPORT</p>
              <div className="flexdiv">
                <img src={picture5} alt="" />
                <p className="textright">
                  På Den lille højskoles Adventuresport-linje
                  <br /> bliver du udfordret i discipliner som
                  <br /> mountainbike, forskellige former for løb
                  <br />
                  <a href={"Fagvis"} className="læsmere">
                    Læs mere...
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Linjefag;
