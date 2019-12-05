import React, { Component } from "react";

class Kajak extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <img src="./billeder/Havkajak.jpg" alt="" />
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

          <p className="title">HAVKAJAK PÅ DEN LILLE HØJSKOLE</p>
          <p className="start/slut">
            Start: 08/07/19
            <br />
            <br />
            Slut: 14/07/19
          </p>

          <p className="pris">4695,- DKK</p>
          <p className="textsmall">
            Kursets hensigt er fra bunden at introducere dig for havkajaksejlads
            og søsikkerhed. og derved give dig et solidt fundament for videre
            sejads. Vi arbejder med praktiske færdigheder såvel som teori og
            refleksion så du er rustet til at færdes fortroligt og sikkert i
            havkajak og selv kunne planlægge egne ture i lokalt og såvel som nyt
            farvand. Vi starter i skolens svømmebassin med øvelser i ind- og
            udstigning, kæntring og exit. Derefter gentager vi øvelserne på
            Tange Sø og fortsætter med ro- og styretag samt kammerat- og
            selvredning.
            <br />
            <br />I løbet af ugen tager vi på vandet forskellige steder afhængig
            af vind og vejr, samt gruppens færdighedsniveau. Vi sejler blandt
            andet på Tange Sø, Gudenåen, Limfjorden og evt. Kattegat.
          </p>
        </div>
      </div>
    );
  }
}

export default Kajak;
