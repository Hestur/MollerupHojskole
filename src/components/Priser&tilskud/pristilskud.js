import React, { Component } from "react";
import "./pristilskud.css";
class priser extends Component {
  render() {
    return (
      <div>
        <div className="hero">
          <img src="./billeder/penge1.jpg" alt="" />
        </div>

        <div className="midcontent">
          <div className="text2">
            <p className="center">
              <p className="titleS">Priser og tilskud</p>
              <p className="title">
                SKOLEPENGE/KOSTPRIS FOR OPHOLD I 2019-2020
              </p>
              ***Der tages forbehold for prisændringer, som følge af fremtidig
              lovgivning***
            </p>
            <p>
              Ugeprisen lyder på kr. 1500,- og er den såkaldte kostpris som
              inkluderer indkvartering på dobbeltværelse med eget toilet & bad,
              dyne, pude, sengelinned, kost, udflugter, holdfoto, diverse
              entréer, undervisning samt fri brug af faciliteter.
              <br />
              Hertil kommer et tilmeldingsgebyr på kr. 1000,- som dækker
              administration. <br />
              Desuden opkræves betaling for obligatorisk studietur til Berlin på
              kr. 2500,- <br />
              Ønsker man enkeltværelse opkræves et tillæg på kr. 400 om ugen.{" "}
              <br />
              Derudover opkræves merbetaling for linjedage på de linjefag man
              vælger (læs herom længere nede på denne side).{" "}
              <div className="center">
                {" "}
                <br /> Pt opkræves følgende: <br />
                <br />
                Adventuresport: kr. 2750
                <br />
                <div className="center">
                  <img src="./billeder/adventure2.jpg" alt="" />
                </div>
                Foto: kr. 2000,- <br />
                <div className="center">
                  <img src="./billeder/foto2.jpg" alt="" />
                </div>
                <div className="nonmid">
                  Øvrige linjefag: kr. 1000,- <br />
                  <div className="center">
                    <img src="./billeder/dans.jpg" alt="" />
                    <img src="./billeder/e-musik.jpg" alt="" />
                    <img src="./billeder/sangskriver.jpg" alt="" />
                  </div>
                </div>
                Endelig betales et engangsbeløb på kr. 1500,- som dækker
                materialer, internet mv. <br />
              </div>
              <br />
            </p>

            <div className="center">
              <p className="title">BETALING</p>

              <p>
                Tilmeldingsgebyret på de kr. 1000,- opkræves umiddelbart efter
                vi har modtaget din tilmelding. Betaling for selve opholdet
                opkræves efter man har gået på højskolen i ca. 4 uger.
                <br /> Betaling sker gennem 3-4 rater.
                <br /> Man kan evt. betale via en individuel afdragsordning
                efter aftale med skolen.
              </p>

              <p className="title">
                SAMLEDE VEJLEDENDE OMKOSTNINGER PR. OPHOLD (INKL. STUDIETUR,
                BERLIN):
              </p>

              <p className="title">
                Efterårshold 2019, 17 uger: Kr. 30.500,-
                <br />
                Efterårshold 2019, 13 uger (2. optag): Kr. 24.500,-
                <br />
                Forårsophold 2020, 21 uger: Kr. 36.500,-
                <br />
                Forårsophold 2020, 16 uger (2. optag): Kr. 29.000,-
              </p>
            </div>
          </div>
        </div>

        <div className="hero">
          <img src="./billeder/penge1.jpg" alt="" />
        </div>
      </div>
    );
  }
}

export default priser;
