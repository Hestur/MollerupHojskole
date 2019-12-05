import React, { Component } from "react";

class Mad extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <img src="./billeder/mad paa dansk.jpg" alt="" />
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

          <p className="title">MAD PÅ DANSK PÅ DEN LILLE HØJSKOLE</p>
          <p className="start/slut">
            Start: 10/07/19
            <br />
            <br />
            Slut: 15/07/19
          </p>

          <p className="pris">5500,- DKK</p>
          <p className="textsmall">
            Danmark er verdenskendt for at producere fødevarer af meget høj
            kvalitet. <br />
            <br />
            Ugens omdrejningspunkt på kurset er mad på dansk. Mad på dansk
            handler både om danske råvarer, men også at benytte andre råvarer
            med et dansk ”touch”
            <br />
            <br />
            På dette kursus vil du komme helt ind i maskinrummet hos lokale
            producenter og opleve, hvordan de producerer og forædler gode
            råvarer til smagsoplevelser i særklasse. <br />
            <br />
            Vi skal besøge lokale producenter, høre deres historie, opleve
            stemningen og smage deres produkter.
          </p>
        </div>
      </div>
    );
  }
}

export default Mad;
