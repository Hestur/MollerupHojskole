import React, { Component } from "react";
import "./langekurser.css";
import okicon from "../assets/ok-mark.png";
import { Link } from "react-router-dom";

class Langekurser extends Component {
  render() {
    return (
      <div className="side">
        <div className="hero">
          <img src="./billeder/lange kurser.png" alt="" />
        </div>
        <div className="midcontent">
          <div className="Hold">
            <p className="heading">LANGE KURSER - FORLØB</p>
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
          </div>
          <div className="text">
            <p className="title">De første dage på højskolen</p>
            <p>
              I dine første dage på Den lille højskole bruger vi tiden på at
              introducere alle vores linjefag og valgfag, således at du kan få
              valgt det skema, der passer præcis til dig. Via din tilmelding har
              du allerede markeret et uforpligtende valg af linjefag, men du
              vælger altså først definitivt dine fag i løbet af de første dage
              på skolen. Den almindelige skema-undervisning starter herefter
              onsdag eftermiddag.
            </p>
            <p>
              Sociale aktiviteter fylder meget i introugen, hvor vi gør rigtigt
              meget ud af at du hurtigt lærer dine nye højskole-kammerater godt
              at kende. Intro-ugen afsluttes altid med et brag af en
              fredags-fest, hvor du bl.a. vil opleve Nørgaards forrygende
              lærerband.
            </p>
            <p className="title">Indkvartering</p>
            <p>
              Man indkvarteres på dobbeltværelse og får således en room-mate på
              sit højskoleophold. Ønsker man enkelt-værelse kan det imødekommes,
              men det koster ekstra (se menupunkt om priser & tilskud). Bemærk
              at vi har ganske få enkeltværelser til rådighed.
            </p>
            <p className="title">Almindeligt skema</p>
            <p>
              Efter en tætpakket introuge, som har fået dig til at føle dig
              hjemme på højskolen, går de følgende uger med almindelig
              skemaundervisning via de mange spændende fag du har valgt. Hvis du
              har fortrudt nogle af dine valg ser vi gerne at du hurtigst muligt
              snakker med dine lærere om evt. at skifte.
            </p>

            <p className="title">Filmskuespil </p>
            <p>
              Vælger du Filmskuespil skal du i løbet af dit ophold møde en række
              professionelle gæstelærere fra branchen (castere, instruktører
              m.fl.). Der er i den forbindelse en samlet merbetaling på 2.000
              kr. hvis du vælger Filmskuespil.
            </p>

            <p className="title">Storby-studieture</p>
            <p>
              Som elev på Den lille højskole kan du vælge mellem to studieture i
              løbet af dit ophold, nemlig Berlin eller New York. Berlin-turen er
              allerede betalt via tilmeldingsgebyret, men du har mulighed for at
              “opgradere” til en New York-tur mod en merbetaling på 8.500 kr.
              Begge ture er alt inklusive undtaget lommepenge. Fra og med Forår
              2019 er Berlin-turen obligatorisk mens New York-turen, som vil
              ligge i forlængelse af opholdet, vil være en ekstra mulighed for
              de rejselystne.
            </p>
          </div>
          <Link to="./TilmeldLang">
            <button className="holdbtn">
              <img src={okicon} alt="" />
              Tilmeld dig her
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Langekurser;
