import React from "react";
import "./styles/banniere.css";
import Menu from "./Menu";
import logo from "../components/img/logo.jpg";
import corona from "../components/img/corona.jpg";
import {Link} from 'react-router-dom'
// import ModalImage from "react-modal-image";

export default function Banniere() {
  return (
    <div className="">
      <div className="container">
        <div className="row mybanniere">
          <div className="col-md-2 text-center">
            <Link to="/">
              <img
                src={logo}
                alt="banniere"
                className="logo img-fluid text-center"
              />
            </Link>
            {/* <ModalImage
              small={require("../components/img/BANNIERE.jpg")}
              large={require("../components/img/BANNIERE.jpg")}
              alt="Mairie d'Aboisso"
              className="mybanniere"
            /> */}
          </div>
          <div className="col-md-6text-center">
            <h3 className="h3-responsive textbaniere">
              BIENVENUE SUR LE SITE OFFICIEL DE LA COMMUNE D'ABOISSO
            </h3>
            {/* <h5 className="h5-responsive textbaniere">
              ABOISSO, Ville Emergente
            </h5> */}
          </div>
          {/* <div className="col-md-2 text-center">
            <img
              src={require("../components/img/logo.jpg")}
              alt="banniere"
              className="logo img-fluid text-center"
            />
          </div> */}
        </div>
      </div>
      <Menu />
    </div>
  );
}
