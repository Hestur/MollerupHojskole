import React, { Component } from "react";
import "./kortekurser.css";
import okicon from "../assets/ok-mark.png";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
class KorteKurser extends Component {
  render() {
    return (
      <div className="side">
        <div className="hero">
          <img src="./billeder/krimi virkelighed og fiktion.jpg" alt="" />
        </div>
        <div className="midcontent">
          <div className="text">
            <p className="title">KORTE KURSER PÅ DEN LILLE HØJSKOLE.</p>

            <p>
              Velkommen til alle. Vi glæder os meget til at møde både nye
              kursister og gamle kendinge. Højskolen er kendt for at have højt
              til loftet og plads til begejstring.
              <br />
              Vi er desuden kendte for at have en god og varm omgangstone med
              respekt for det enkelte menneske.
              <br />
              I hjemlige og hyggelige rammer vil du få input af forskellig
              karakter, så du på bare en
              <br /> enkelt uge vil være i stand til at flytte dig både fagligt
              og socialt.
            </p>
          </div>
          <div className="line"></div>

          <p className="title">KORTE KURSER</p>

          <div className="tablediv">
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th>TITEL</th>
                  <th>START</th>
                  <th>SLUT</th>
                  <th>PRIS</th>
                  <th>TILMELDING</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tabletitle">
                    {" "}
                    <Link
                      to="./Danskfilmhistorie"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Dansk filmhistorie
                    </Link>
                  </td>

                  <td>17/11/19</td>
                  <td>22/11/19</td>
                  <td>4075,-</td>
                  <td>
                    {" "}
                    <Link to="/TilmeldKort">
                      <button className="holdbtn1">
                        <img src={okicon} alt="" />
                        Tilmeld dig her
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="tabletitle">
                    {" "}
                    <Link
                      to="./Kajak"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Havkajak
                    </Link>
                  </td>
                  <td>08/07/19</td>
                  <td>14/07/19</td>
                  <td>4695,-</td>
                  <td>
                    {" "}
                    <Link to="/TilmeldKort">
                      <button className="holdbtn1">
                        <img src={okicon} alt="" />
                        Tilmeld dig her
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td className="tabletitle">
                    {" "}
                    <Link
                      to="./Jagtnatur"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Jagttegn og natur
                    </Link>
                  </td>
                  <td>07/04/19</td>
                  <td>13/04/19</td>
                  <td>4495,-</td>
                  <td>
                    {" "}
                    <Link to="/TilmeldKort">
                      <button className="holdbtn1">
                        <img src={okicon} alt="" />
                        Tilmeld dig her
                      </button>
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td className="tabletitle">
                    {" "}
                    <Link
                      to="./Krimi"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Krimi, virkelighed og fiktion
                    </Link>
                  </td>
                  <td>09/06/19</td>
                  <td>13/06/19</td>
                  <td>4295,-</td>
                  <td>
                    {" "}
                    <Link to="/TilmeldKort">
                      <button className="holdbtn1">
                        <img src={okicon} alt="" />
                        Tilmeld dig her
                      </button>
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td className="tabletitle">
                    {" "}
                    <Link
                      to="./Øl"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Ølbrygning
                    </Link>
                  </td>
                  <td>21/06/19</td>
                  <td>23/06/19</td>
                  <td>4525,-</td>
                  <td>
                    {" "}
                    <Link to="/TilmeldKort">
                      <button className="holdbtn1">
                        <img src={okicon} alt="" />
                        Tilmeld dig her
                      </button>
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td className="tabletitle">
                    {" "}
                    <Link
                      to="./Mad"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Mad på dansk
                    </Link>
                  </td>
                  <td>10/07/19</td>
                  <td>15/07/19</td>
                  <td>5500,-</td>
                  <td>
                    {" "}
                    <Link to="/TilmeldKort">
                      <button className="holdbtn1">
                        <img src={okicon} alt="" />
                        Tilmeld dig her
                      </button>
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td className="tabletitle">
                    {" "}
                    <Link
                      to="./Kor"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Kor, sang og musik
                    </Link>
                  </td>
                  <td>19/07/19</td>
                  <td>25/07/19</td>
                  <td>3790,-</td>
                  <td>
                    {" "}
                    <Link to="/TilmeldKort">
                      <button className="holdbtn1">
                        <img src={okicon} alt="" />
                        Tilmeld dig her
                      </button>
                    </Link>
                  </td>
                </tr>

                <tr>
                  <td className="tabletitle">
                    {" "}
                    <Link
                      to="./Yoga"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Wellness og Yoga
                    </Link>
                  </td>
                  <td>25/08/19</td>
                  <td>29/08/19</td>
                  <td>4875,-</td>
                  <td>
                    {" "}
                    <Link to="/TilmeldKort">
                      <button className="holdbtn1">
                        <img src={okicon} alt="" />
                        Tilmeld dig her
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default KorteKurser;
