import React, { Component } from "react";

class Yoga extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <img src="./billeder/yoga og wellness.jpg" alt="" />
          <div className="midcontent midcontentb">
            <p className="title">KORTE KURSER</p>

            <p className="normaltext">
              Velkommen til alle.
              <br />
              Vi glæder os meget til at møde både nye kursister og gamle
              kendinge.
              <br />
              Højskolen er kendt for at have højt til loftet og plads til
              begejstring.
              <br />
              Vi er desuden kendte for at have en god og varm omgangstone med
              respekt for det enkelte menneske.
              <br />I hjemlige og hyggelige rammer vil du få input af forskellig
              karakter, så du på bare en enkelt uge vil være i stand til at
              flytte dig både fagligt og socialt.
            </p>
            <div className="line"></div>

            <p className="title">WELLNESS / YOGA PÅ DEN LILLE HØJSKOLE</p>
            <p className="start/slut">
              Start: 25/08/19
              <br />
              <br />
              Slut: 29/08/19
            </p>

            <p className="pris">4875,- DKK</p>
            <p className="textsmall">
              På Den lille højskole tilbyder vi en række kurser, hvor det at
              opleve og bruge sig selv i fællesskab med andre og lære om
              forskellige emner er fokus.
              <br />
              <br />
              Den lille højskole kan tilbyde dig at deltage i følgende kurser:{" "}
              <br />
              <br />
              • Wellness og højskole
              <br />
              <br />
              • Yoga og højskole
              <br />
              <br />• Yoga – med et strejf af wellness
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Yoga;
