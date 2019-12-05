import React, { Component } from "react";

class Kor extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <img src="./billeder/kor sang og musik.jpg" alt="" />
        </div>
        <div className="midcontent midcontentb">
          <p className="title">KORTE KURSER</p>

          <p className="normaltext">
            Velkommen til alle.
            <br />
            Vi glæder os meget til at møde både nye kursister og gamle kendinge.
            <br />
            Højskolen er kendt for at have højt til loftet og plads til
            begejstring.
            <br />
            Vi er desuden kendte for at have en god og varm omgangstone med
            respekt for det enkelte menneske.
            <br />I hjemlige og hyggelige rammer vil du få input af forskellig
            karakter, så du på bare en enkelt uge vil være i stand til at flytte
            dig både fagligt og socialt.
          </p>
          <div className="line"></div>

          <p className="title">KOR, SANG OG MUSIK PÅ DEN LILLE HØJSKOLE</p>
          <p className="start/slut">
            Start: 19/07/19
            <br />
            <br />
            Slut: 25/07/19
          </p>

          <p className="pris">3790,- DKK</p>
          <p className="textsmall">
            At synge sammen giver en oplevelse af fællesskab. Sang og lytte til
            musik er desuden livgivende og kan være en kilde til stor glæde.{" "}
            <br />
            <br />
            I 2019 udbyder vi 5 forskellige sang- og musikkurser: <br />
            <br />
            • Gospel
            <br />
            <br />
            • Klassisk kor
            <br />
            <br />
            • Syng dig glad
            <br />
            <br />
            • Kend dine klassikere – fem af de største i klassisk musik
            <br />
            <br />
            • Bach “Juleoratorium” kom helt tæt på Johan Sebastian Bach
            <br />
            <br />
            På alle kurserne er der meget erfarne korledere og musikundervisere,
            der varetager undervisningen.
          </p>
        </div>
      </div>
    );
  }
}

export default Kor;
