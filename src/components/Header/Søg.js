import React, { Component } from "react";
import ReactSearchBox from "react-search-box";
import "./Søg.css";

export default class Searchbox extends Component {
  data = [
    {
      key: "dansk filmhistorie",
      value: "Dansk filmhistorie",
      path: "/Danskfilmhistorie"
    },
    {
      key: "havkajak",
      value: "Havkajak",
      path: "/Kajak"
    },
    {
      key: "Jagttegn og natur",
      value: "Jagttegn og natur",
      path: "/Jagtnatur"
    },
    {
      key: "Krimi, virkelighed og fiktion",
      value: "Krimi, virkelighed og fiktion",
      path: "/Krimi"
    },
    {
      key: "Ølbrygning",
      value: "Ølbrygning",
      path: "/Øl"
    },
    {
      key: "Mad på dansk",
      value: "Mad på dansk",
      path: "/Mad"
    },
    {
      key: "Kor, sang og musik ",
      value: "Kor, sang og musik ",
      path: "/Kor"
    },
    {
      key: "wellness og yoga",
      value: "Wellness og Yoga",
      path: "/Yoga"
    },
    {
      key: "foto",
      value: "Foto",
      path: "/Linjefag"
    },
    {
      key: "sangskriver",
      value: "Sangskriver",
      path: "/Linjefag"
    },
    {
      key: "e musik",
      value: "e-musik",
      path: "/Linjefag"
    },
    {
      key: "dans",
      value: "Dans",
      path: "/Linjefag"
    },
    {
      key: "adventure sport",
      value: "Adventure sport",
      path: "/Linjefag"
    }
  ];

  render() {
    return (
      <div>
        <div className="Søg">
          <p className="titleS">Søg</p>
          <ReactSearchBox
            style={{ padding: 20 }}
            placeholder="Søg"
            data={this.data}
            callback={record => console.log(record)}
            onSelect={record => this.props.history.push(record.path)}
          />
        </div>
      </div>
    );
  }
}
