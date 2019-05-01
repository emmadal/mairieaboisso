import React from "react";
import "./styles/banniere.css";
import Menu from "./Menu";

export default function Banniere() {
  return (
    <div className="">
      <div className="container">
        <div className="row mybanniere">
          <div className="col-md-3 text-center">
            <img
              src={require("../components/img/BANNIERE.jpg")}
              alt="banniere"
              className="mybanniere text-center"
            />
          </div>
          <div className="col-md-7 text-center">
            <h3 className="h3-responsive textbaniere">
              MAIRE DE LA COMMUNE D'ABOISSO
            </h3>
            <h5 className="h5-responsive textbaniere">
              Le vrai changement avec Jeremie Alfred N'Gouan
            </h5>
          </div>
          <div className="col-md-2 text-center">
            <img
              src={require("../components/img/logo.jpg")}
              alt="banniere"
              className="logo img-fluid text-center"
            />
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
}
