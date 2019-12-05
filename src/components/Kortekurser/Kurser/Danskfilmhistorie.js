import React, { Component } from "react";
import "./style.css";

class Danskfilmhistorie extends Component {
  render() {
    return (
      <div>
        <div className="herob">
          <img src="./billeder/danske film.jpg" alt="" />
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

          <p className="title">DANSK FILMHISTORIE PÅ DEN LILLE HØJSKOLE</p>
          <p className="start/slut">
            Start: 17/11/19
            <br />
            <br />
            Slut: 22/11/19
          </p>

          <p className="pris">4075,- DKK</p>
          <p className="textsmall">
            Kurset i den danske filmhistorie på Den lille højskole henvender sig
            til dem, som nærer stor interesse for filmmediet og den danske
            filmskat. <br /> På kurset præsenteres en komprimeret dansk
            filmhistorie, med udgangspunkt i kunstneriske retninger, filmiske
            genrer og de centrale instruktører og skuespillere, som har været
            med til at præge de levende billeder. <br />
            Når de overordnede linjer er på plads, dykkes der endnu længere ned
            i udvalgte instruktørers værker, som undervejs vil blive vist ved de
            indlagte filmforevisninger i skolens biograf. <br />
            På kurset kommer vi blandt andre rundt om skuespilleren Asta Nielsen
            og instruktørerne Carl Th. Dreyer, Erik Balling, Lars Von Trier og
            Anders Thomas Jensen.
          </p>
        </div>
      </div>
    );
  }
}

export default Danskfilmhistorie;
