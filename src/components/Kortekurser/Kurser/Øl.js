import React, { Component } from "react";

class Øl extends Component {
  t;
  render() {
    return (
      <div>
        <div className="hero">
          <img src="./billeder/oelbrygning.jpg" alt="" />
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

          <p className="title">ØLBRYGNING PÅ DEN LILLEHØJSKOLE</p>
          <p className="start/slut">
            Start: 21/06/19
            <br />
            <br />
            Slut: 23/06/19
          </p>

          <p className="pris">4525,- DKK</p>
          <p className="textsmall">
            Kurset er for alle, men henvender sig primært til den “nye” brygger
            der har lidt eller ingen erfaring med ølbrygning.
            <br />
            <br />
            I løbet af en uge vil vi give dig den viden du skal bruge for selv
            at lave kvalitetsøl mens du samtidigt lærer om øllets historie,
            regioner og kultur. <br />
            <br />
            Du skal lære om øllets ingredienser såvel som forskellige
            brygmetoder og teknikker, så du selv kan træffe kvalificerede valg
            når du i fremtiden vil udvikle dine egne opskrifter. <br />
            <br />
            Vi dykker ned i maltens og humlens univers, og ser på
            ingrediensernes betydning for smag, aroma og visuelle udtryk. <br />
            <br />
            Vi underviser i er infusions- og dekoktionsmæskning med “allgrain”
            ingredienser. Det vil sige brygning med rigtigt malt og humle og
            dermed ikke ekstrak eller smagstilsætninger. <br />
            <br />
            Udstyret vi anvender består af semiautomatiske kedler med indsatser,
            fremstillet til hobbybrygning af 25-30 liter. Vi går i dybden med
            ølbrygnings forskellige trin, herunder mæsketempearturens betydning
            for øllets udseende, skumkrone og ikke mindste smag. <br />
            <br />
            Vi forholder os også til humlekogningens intervaller samt tørhumle
            og det lidt mere specielle whirlpooling.
          </p>
        </div>
      </div>
    );
  }
}

export default Øl;
