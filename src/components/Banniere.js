import React from "react";
import "./styles/banniere.css";
import Menu from "./Menu";
import ModalImage from "react-modal-image";

export default function Banniere() {
  return (
    <div className="">
      <div className="container">
        <div className="row mybanniere">
          <div className="col-md-3 text-center">
            <ModalImage
              small={require("../components/img/smallbanniere.jpg")}
              large={require("../components/img/largebanniere.jpg")}
              alt="Mairie d'Aboisso"
              className="mybanniere"
            />
          </div>
          <div className="col-md-7 text-center">
            <h3 className="h3-responsive textbaniere">
              BIENVENUE A LA MAIRIE D'ABOISSO
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
