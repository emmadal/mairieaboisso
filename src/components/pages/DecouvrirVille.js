import React from "react";
import { description } from "../containers/Description";
import "../styles/historiqueville.css";
import Patrimoine from "../Patrimoine";

export default function DecouvrirVille() {
  return (
    <div>
      <div className="container">
        <h3 className="mt-5 mb-5 text-green h3-responsive mytitle">
          {" "}
          Decouvrir Aboisso{" "}
        </h3>
        <div className="row">
          <div className="col-md-12">
            <img
              src={require("../img/ville_aboisso_large.png")}
              className="img-fluid rounded"
              alt="Histoire"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <p className="text-justify descriptn">{description[2].text}</p>
            <Patrimoine />
          </div>
        </div>
      </div>
    </div>
  );
}
