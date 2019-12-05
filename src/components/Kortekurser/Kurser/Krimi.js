import React, { Component } from "react";

class Krimi extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <img src="./billeder/krimi virkelighed og fiktion.jpg" alt="" />
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

          <p className="title">
            KRIMI, VIRKELIGHED OG FIKTION PÅ DEN LILLE HØJSKOLE
          </p>
          <p className="start/slut">
            Start: 09/06/19
            <br />
            <br />
            Slut: 13/06/19
          </p>

          <p className="pris">4295,- DKK</p>
          <p className="textsmall">
            En højskoleuge fyldt med spænding i form af krimi fra den virkelige
            verden – og fiktionen. <br />
            <br />
            Mød foredragsholdere som til daglig omgås kriminelle i landets
            fængsler, mennesker der er løsladte efter endt afsoning og eksperter
            indenfor krimibogsgenren.
            <br />
            <br /> Oplev oplæg ved justitsministeren om straf og soning/afsoning
            med mulighed for efterfølgende debat.
            <br />
            <br /> Kom på udflugt til ”Slottet”, det gamle fængsel i Horsens,
            som nu er Fængselsmuseum. <br />
            <br />
            En, på flere måder, spændende højskoleuge, med mulighed for gode
            diskussioner om kriminalitet, straf – og krimier. <br />
            <br /> Vi skal naturligvis også synge til morgensamlinger og på
            gåture i den skønne natur ved Gudenåen.
          </p>
        </div>
      </div>
    );
  }
}

export default Krimi;
