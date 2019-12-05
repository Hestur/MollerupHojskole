import React, { Component } from "react";
import logo from "../assets/svglogo.svg";
import "./kursuscenter.css";

class Kursuscenter extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <img src="./billeder/Kursuscenter.jpg" alt="" />
        </div>
        <div className="midcontent">
          <p className="title">KURSUSCENTER</p>
          <p>
            Den lille højskole ligger central placeret midt imellem Aarhus og
            Grenaa. Med en bred vifte af faciliteter i moderne bygninger og en
            beliggenhed i yderst attraktive omgivelser midt i Gudenådalen,
            fremstår Nørgaards Højskoles Kursuscenter som et ideelt udgangspunkt
            for inspiration, læring og samvær. Kursister kan reservere egen
            opholdsstue, hvilket betyder at kursusprocessen fortsætter, når
            undervisningslokalerne forlades, ligesom man er velkommen til at
            benytte højskolens mange skønne faciliteter og nærliggende
            rekreative arealer.
          </p>

          <p className="title">INDKVARTERING</p>
          <p>
            Den lille højskole Kursuscenter tilbyder særdeles fine
            overnatningsmuligheder. Vi råder over 105 dobbeltværelser, som alle
            er udstyrede med toilet, bad, wifi, stol, skab og skrivebord.
          </p>

          <p className="title">MØDE OG KONFERENCEFACILITETERNE</p>
          <p>
            Omfatter grupperum, plenumlokaler, foredragssal samt multisal med
            plads til op til 350 deltagere samt fuldt udstyrede IT-lokaler med
            internetforbindelse. Vi råder over alt det gængse AV-udstyr
            heriblandt storskærmsprojektorer, OH-projektorer, mikrofoner,
            højttaleranlæg, DVD, CD mv. Vi dækker jeres behov efter aftale.
          </p>

          <p className="title">FORPLEJNING</p>
          <p>
            Den lille højskole økologiske køkken bærer Fødevarestyrelsens
            Elite-smiley og lægger vægt på årstidens råvarer, sund kost og
            varieret hverdagsmad. Dagens hovedmåltider serveres som buffet, med
            et bredt udvalg.
          </p>

          <p>
            I prisen for New York-turen er inkluderet fly, fuld forplejning,
            entréer, transportudgifter i New York ect.
          </p>

          <div className="velkommen">
            <p>VELKOMMEN PÅ</p>
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Kursuscenter;
