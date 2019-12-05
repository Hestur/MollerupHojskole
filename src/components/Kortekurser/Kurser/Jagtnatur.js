import React, { Component } from "react";

class Jagtnatur extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <img src="./billeder/jagt og natur.jpg" alt="" />
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

          <p className="title">JAGTTEGN OG NATUR PÅ DEN LILLE HØJSKOLE</p>
          <p className="start/slut">
            Start: 07/04/19
            <br />
            <br />
            Slut: 13/04/19
          </p>

          <p className="pris">4495,- DKK</p>
          <p className="textsmall">
            Jagttegn og natur på Den lille højskole henvender sig til alle
            uanset om du er et rigtigt naturmenneske som drømmer om at få endnu
            et aspekt i tilgangen til naturen, eller om du tænker at et jagttegn
            netop kan være startskuddet til at komme mere ud i naturen.
            <br />
            <br /> På kurset vil du gennem teori og praksis lære de
            grundlæggende ting omkring jagt og vildt, som gør dig i stand til at
            gå op til jagtprøven.
            <br />
            <br /> Den teoretiske del vil tage udgangspunkt i lærebogen
            ”Jagttegn”med gennemgang af vildtkendskab, vildtbiologi,
            vildtforvaltning, vildthåndtering, jagtvåben og ammunition,
            lovgivning, sikkerhed, etik og jagtledelse.
            <br />
            <br /> Den praktiske del foregår udendørs, hvor våbenbetjening,
            skydning og afstandsbedømmelse vil være de primære ting vi arbejder
            med.
          </p>
        </div>
      </div>
    );
  }
}

export default Jagtnatur;
