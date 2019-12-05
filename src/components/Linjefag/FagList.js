import React, { useContext } from "react";
import { FagContext } from "./FagState";

const FagList = () => {
  const { Fag } = useContext(FagContext);
  return (
    <div>
      {Fag.map(fag => {
        return (
          <div>
            <img src={fag.img} alt="" />
            <p className="smalltitle">{fag.title}</p>
            <p className="fagsmalltext">{fag.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FagList;
