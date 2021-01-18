import React from "react"
import { description } from "../containers/Description"
import "../styles/historiqueville.css"
import histoire_aboisso_large from "../img/histoire_aboisso_large.webp";

export default function HistoriqueVille() {
  return (
    <div>
      <div className="container">
        <h3 className="mt-5 mb-5 text-green h3-responsive mytitle">
          {" "}
          Historique d'Aboisso{" "}
        </h3>
        <div className="row">
          <div className="col-md-12">
            <img
              src={histoire_aboisso_large}
              className="img-fluid rounded"
              alt="Histoire"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <p className="text-justify descriptn">{description[1].text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
